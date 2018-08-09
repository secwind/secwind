import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

export class Contact extends Component {
    constructor(){
        super()
        this.state = {
            showContactInfo: false,
        }
    }

    deleteDataInfo = (id, dispatch) => {
        dispatch({ 
            type:'Deleted_Contact', 
            payload:id  
        });
    }

    render() {
        const { name, email, phone, style, id } = this.props.contact;
        const { showContactInfo } = this.state;
    
        return (
            <Consumer>
                {value => {
                    const  {dispatch} = value 
                    return (
                        <div className="card card-body mb-3">
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
                        </h4>  
                        { showContactInfo ? null :
                            (
                                <ul className="list-group" >
                                <li className="list-group-item">
                                Email: {email}
                                </li>
                                <li className="list-group-item">
                                Phone : {phone}
                                </li>
                                </ul> 
                            )
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
