import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavbarApp extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
            <Link to="/" className="navbar-band">
                Clients Panel
            </Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collrapse"
                data-target="#navbarMain"
            >
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div className="collrapse navbar-collrapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Dashbord
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default NavbarApp
