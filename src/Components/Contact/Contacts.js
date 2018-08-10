import React, { Component } from 'react'
import Contact from './Contact';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getContact } from '../../action/Action';




class Contacts extends Component {
    componentDidMount() {
        this.props.getContact();
    }
    

    render() {
        //Map state ใหม่ให้เป็นชื่อใหม่ว่า this.props.dataContact
        const { dataContacts } = this.props;
        return (
            <React.Fragment>
                <h1 className="dispaly-4 mb-2">
                    <span className="text-danger">Contact</span>List SecWind
                </h1>
                {/* Map dataContacts เป็น dataContact เพื่อส่งข้อมูลไป Contact.js */}
                { dataContacts.map(dataContact => (  
                    <Contact
                        key= {dataContact.id}
                        dataContact= {dataContact}
                    />
                ))} 
            </React.Fragment>          
        ) 
     
    }
}

Contacts.propTypes = {
    dataContacts: PropTypes.array.isRequired,
    getContact: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    dataContacts: state.StoreData.storeA
})



export default connect(
    mapStateToProps,
    {getContact},
    )(Contacts);
    
        

// หลังจาก Render ให้ componentDidMount ทำงานโดยเรียย func this.props.getContact() ก่อน
// getContact มาจาก action ไป get ข้อมูลมากจาก StoreA เมื่อ Type เป็น GET_CONTACT จริงก็ Return state
// mapStateToProps เปลี่ยน state ให้เป็นชื่อใหม่ว่า dataContacts


