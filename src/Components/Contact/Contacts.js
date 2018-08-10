import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../Context';


export default class Contacts extends Component {
    
    deleteDataInfo = (id) => {
        const { contacts } = this.state

        // ทำการ Setstate contacts ใหม่ ในตัวแปล contact ให้ contact.id ต้องไม่มีค่าที่ทำกับ id หรือตัวแปลของ func deleteDataInfo
        const newContacts = contacts.filter(contact => 
        contact.id !== id
        )
        this.setState({contacts:newContacts })
    }
  render() {
      return (
        <Consumer>
            {value => {
                const { contacts } = value
                return (
                    <React.Fragment>
                        <h1 className="dispaly-4 mb-2">
                            <span className="text-danger">Contact</span>List SecWind
                        </h1>
                        { contacts.map(contact => (
                            <Contact
                                key= {contact.id}
                                contact= {contact}
                                deleteDataInfo={this.deleteDataInfo.bind(this, contact.id)}
                            />
                            )) 
                        }
                    </React.Fragment>
                ) 
            }}    
        </Consumer>
      )
    }
}
        
        

   


