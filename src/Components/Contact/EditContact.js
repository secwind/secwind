import React, { Component } from "react";
import WithFormInputGroup from "./../../HOC/WithFormInputGroup";
import PropTypes from 'prop-types'
import { editContact , updateContact} from "../../action/Action";
import { connect } from 'react-redux'


// import uuid from "uuid";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone,} = nextProps.storeEditting;
      this.setState({
        name,
        email,
        phone,
      })
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.editContact(id);
    console.log("ID คือ",id);
    

  }
  onSubmithandle =  e => {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;
    // Chech for Errors
    if (name === "") {
      this.setState({
        errors: { name: "กรุณา กรอกชื่อ นามสกุล ต้องไม่ว่าง!!" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "กรุณา กรอก Email ต้องไม่ว่าง!!" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "กรุณา กรอกเบอร์โทรศัพท์ ต้องไม่ว่าง!!" }
      });
      return;
    }

    const { id } = this.props.match.params;  
    const Updatedata = {
      id,
      name,
      email,
      phone,
      errors
    };
      console.log(Updatedata);
      

      this.props.updateContact(Updatedata);
      this.props.history.push('/');
 

    
  };

  onChangehandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    const onChange = this.onChangehandle;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h3>Edit Contact</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmithandle.bind(this)}>
            <WithFormInputGroup
              lable="Name :"
              name="name"
              type="text"
              value={name}
              onChange={onChange}
              placehoder="Enter Name..."
              autoComplete="name"
              error={errors.name}
            />

            <WithFormInputGroup
              lable="Email :"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              placehoder="Enter Email..."
              autoComplete="email"
              error={errors.email}
            />

            <WithFormInputGroup
              lable="Phone :"
              name="phone"
              type="text"
              value={phone}
              onChange={onChange}
              placehoder="Enter Phone..."
              autoComplete="tel-national"
              error={errors.phone}
            />
            <input
              type="submit"
              className="btn btn-light btn-block"
              value="Update Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  storeEditting: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  storeEditting: state.StoreData.storeEditting
})



export default connect( mapStateToProps,{editContact, updateContact} )(EditContact);
  
  
 
  
// เริ่มจาก componentDidMount call func editContact 
// func editContact ค้นหา id  เอาข้อไปเก็บใน storeData.storeEditting 
// mapStateToProps ก็สร้างตัวแปร storeEditting มาจาก  state.StoreData.storeEditting
// componentWillReceiveProps รับค่า props มาเก็บไว้ใน this.state // setState จึงShow data

// Udta Data เรื่มจากกดปุ่ม Submit func onSubmithandle ทำงาน
// func updateContact ค้นหา id  และ put เปลี่ยนแปลงข้อมูลส่งไป StoreReducer
