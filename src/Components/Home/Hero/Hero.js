import React from 'react';
import './Hero.scss';

import star from '../../../images/star.png';

const Hero = () => {
    return (
        <div className="hero-container d-flex">
            <div className="main-first col-md-6">
                <h1 style={{fontWeight: 'bold'}}>FREE COFFE</h1>
                <h1 style={{fontWeight: 'bold'}}>IS A TAP AWAY</h1>
                <p className="mt-3" style={{fontWeight: 'bold'}}>Join now to start earning Rewards.</p>
                <a href="/" className="plain-button">
                    Join now
                </a>
                <p className="mt-4" style={{fontWeight: 'bold'}}>Or <a href="/">join in the app </a> for the best experience</p>
            </div>
            <div className="main-second col-md-6">
                <img className="hero-image" src={star} alt="star-logo"/>
            </div>
        </div>
    );
};

export default Hero;