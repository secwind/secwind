import React, { Component } from "react";
import { Consumer } from "../../Context";

import WithFormInputGroup from "./../../HOC/WithFormInputGroup";
import Axios from "../../../node_modules/axios";

// import uuid from "uuid";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    console.log(res);
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
  onSubmithandle = async (dispatch, e) => {
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

    const UpdateContact = {
      name,
      email,
      phone,
      errors
    };
    const { id } = this.props.match.params;

    const res = await Axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      UpdateContact
    );

    dispatch({ type:'Update_Contact', payload:res.data});
    // console.log(res.data);

    // หลังจาก ส่งค่า payload ไปให้ Reducer ทำการ clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: ""
    });

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
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h3>Edit Contact</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmithandle.bind(this, dispatch)}>
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
        }}
      </Consumer>
    );
  }
}

export default EditContact;
