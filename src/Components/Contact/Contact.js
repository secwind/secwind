import React, { Component } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { delContact } from './../../action/Action'
export class Contact extends Component {
    constructor(){
        super()
        this.state = {
            showContactInfo: false,
        }
    }

    DelData(id) {
        console.log("ทำการลบข้อมูลของ ID :",id ,"สำเร็จแล้ว")
        this.props.delContact(id);
    }



    render() {
        //1. รับค่า dataContact จาก Contacts.js และ เปลี่ยนเป็นชื่อย่อ
        const { name, email, phone,  id, } = this.props.dataContact;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3" >
            <h5> {name} {'  '}
                <i className="fas fa-sort-down" 
                    onClick={() =>
                    this.setState({
                        showContactInfo: !this.state.showContactInfo
                    })}
                    style={{
                        'cursor': 'pointer'
                    }}
                />
                <i className="fas fa-times" 
                    onDoubleClick={this.DelData.bind(this, id)}
                    style={{
                        'cursor': 'pointer',
                        'color': 'red',
                        'float': 'right',
                    }}
                />
                <Link to={`contact/edit/${id}`} > 
                        <i className="fas fa-pencil-alt"
                            style={{
                                'cursor': 'pointer',
                                'color': 'back',
                                'float': 'right',
                                'marginRight': '18px',
                            }}
                        />
                </Link>
            </h5>  
                    
            { showContactInfo ? 
                (
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-3">
                                Email:
                            </div>
                            <div className="col-9">
                                {email}
                            </div>
                        </div>
                        <div className="row justify-content-start">
                            <div className="col-3">
                                Phone :
                            </div>
                            <div className="col-9">
                                 {phone}
                            </div>
                        </div>
                    </div>
                   
                ) : null 
            }
             

          </div>
        )
    }

}

    
Contact.propTypes = {
    dataContact: PropTypes.object.isRequired,
    delContact: PropTypes.func.isRequired,
}


export default connect(null,{ delContact })(Contact);




