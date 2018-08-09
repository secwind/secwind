import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from '../../../node_modules/axios';
import { Link } from 'react-router-dom';

export class Contact extends Component {
    constructor(){
        super()
        this.state = {
            showContactInfo: false,
        }
    }



    deleteDataInfo = async (id, dispatch) => {
        try {
            await Axios.delete('https://jsonplaceholder.typicode.com/users/'+id);

            dispatch({ 
                type:'Deleted_Contact', 
                payload:id  
            })
            
        } catch (e) {
            dispatch({ 
                type:'Deleted_Contact', 
                payload:id  
            })
            
        }  
    }

    render() {
        const { name, email, phone, style, id, username } = this.props.contact;
        const { showContactInfo } = this.state;
    
        return (
            <Consumer>
                {value => {
                    const  {dispatch} = value 
                    return (
                        <div className="card card-body mb-3" >
                        <h4 style={style}>{name} {'  '}
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
                                onDoubleClick={
                                    this.deleteDataInfo.bind(this, id, dispatch)
                                }
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
                        </h4>  
                                
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
                                    <div className="row justify-content-start">
                                        <div className="col-3">
                                            User :
                                        </div>
                                        <div className="col-9">
                                            {username}
                                        </div>
                                    </div>

                                </div>
                               
                            ) : null 
                        }
                         
            
                      </div>
                    )
                }
                    
                }
            </Consumer>
         
        )
    }

}

    
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteDataInfo: PropTypes.func.isRequired,
}


export default Contact;




