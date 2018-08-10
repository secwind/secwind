import React, { Component } from 'react'
import WithFormInputGroup from './../../HOC/WithFormInputGroup';
import { connect } from 'react-redux'
import { addContact } from './../../action/Action'
import PropTypes from 'prop-types'
import uuid from 'uuid'




class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'', 
    errors:{},
  }
  onSubmithandle =  (e) => {
    e.preventDefault();
    const { name, email, phone, errors} = this.state;
    // Chech for Errors
    if (name === '') {
      this.setState ({ errors: { name: 'กรุณา กรอกชื่อ นามสกุล ต้องไม่ว่าง!!' }
      }) 
      return;    
    }
    if (email === '') {
      this.setState ({ errors: { email: 'กรุณา กรอก Email ต้องไม่ว่าง!!'}
      })  
      return;      
    }
    if (phone === '') {
      this.setState ({ errors: { phone: 'กรุณา กรอกเบอร์โทรศัพท์ ต้องไม่ว่าง!!' }
      })     
      return;   
    }
    
    const newContact = {
      name, 
      email, 
      phone,
    }

    this.props.addContact(newContact);
    

     // หลังจาก ส่งค่า payload ไปให้ Reducer ทำการ clear state 
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors:'',
    })

    this.props.history.push('/');
    
  };

  onChangehandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };



  render() {    
    const { name, email, phone, errors } = this.state;
    const onChange = this.onChangehandle;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h3>Add Contact</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmithandle.bind(this)} >
            <WithFormInputGroup
              lable= 'Name :'
              name= 'name'
              type= 'text'
              value= {name}
              onChange = {onChange}
              placehoder= 'Enter Name...'
              autoComplete= 'name'
              error={errors.name}
            />

            <WithFormInputGroup
              lable= 'Email :'
              name= 'email'
              type= 'email'
              value= {email}
              onChange = {onChange}
              placehoder= 'Enter Email...'
              autoComplete= 'email'
              error={errors.email}
            />  

            <WithFormInputGroup
              lable= 'Phone :'
              name= 'phone'
              type= 'text'
              value= {phone}
              onChange = {onChange}
              placehoder= 'Enter Phone...'
              autoComplete= 'tel-national'
              error={errors.phone}
            />      
            <input 
              type="submit" className="btn btn-light btn-block"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    )
  }
}

addContact.propTypes = {
  addContact: PropTypes.func.isRequired,
}

// null คือ ไม่มี mapStateToProps (mapStateToProps ใช้กับการ get ข้อมูล)
export default connect(null ,{ addContact })(AddContact);




