import React from 'react'
import PropTypes from 'prop-types';

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
                        <a href="/" className="nav-link">
                            Home
                        </a>
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