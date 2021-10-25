import React from 'react';
import './Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


import logo from '../../../images/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            <a className="navbar-brand ms-5" href="/">
              <img src={logo} alt="" width="58" height="70"/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">MENU</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">REWARD</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">GIFTCARD</a>
                </li> 
              </ul>

              <div className="me-5 nav-item d-flex">
                
                    <h6 className="find-store"><FontAwesomeIcon icon={faMapMarkerAlt} /> Find a store</h6>
                  
                    <a href="/" className="white-button">
                      sign in
                    </a>
                  
                    <a href="/" className="green-button">
                      Join now
                    </a>
                
              </div>
              
              

            </div>
          </div>
</nav>
    );
};

export default Navbar;