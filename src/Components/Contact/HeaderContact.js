import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HearderContact = (props) => {
    const { nameH } =  props
    return(
        <nav className="navbar navbar-expand-sm navbar-drak bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-band">
                    { nameH }
                </a>
            </div>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                        <i className="fas fa-plus"></i> AddContact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                        <i className="fas fa-question"></i> About
                        </Link>
                    </li>
                   
                </ul>      
            </div>  
        </nav>
    )
}

HearderContact.defaultProps = {
    nameH: 'My App defalut'
}
HearderContact.propTypes = {
    nameH: PropTypes.string.isRequired
}

export default HearderContact;