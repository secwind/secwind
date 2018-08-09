import React, { Component } from 'react'

class AddContact extends Component {

  onSubmithandle = (e) => {
    e.preventDefault();
    const contact = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
    }
    console.log(contact);
    
  }

  static defaultProps = {
    name: 'SecWind',
    email: 'secwind@gmail.com',
    phone: '026448146',
  }
  
  render() {    
    const { name, email, phone }  = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h3>Add Contact</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmithandle.bind(this)} >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                 type="text"
                 name="name" 
                 className="form-control form-control-gl"
                 placeholder="Enter Name..."
                 defaultValue={name}
                 autoComplete="name"
                 ref={input => this.inputName=input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                 type="email"
                 name="email" 
                 className="form-control form-control-gl"
                 placeholder="Enter Email..."
                 defaultValue={email}
                 autoComplete="email"
                 ref={input => this.inputEmail=input}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                 type="text"
                 name="phone" 
                 className="form-control form-control-gl"
                 placeholder="Enter phone..."
                 defaultValue={phone}
                 autoComplete="tel-national"
                 ref={input => this.inputPhone=input}
              />
            </div>
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

export default AddContact;
