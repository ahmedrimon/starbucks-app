import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="d-flex footer-container">
            <div className="col-md-2" >
                <h3>About Us</h3>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Our Company</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Our Coffee</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Stories and News</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Starbucks Archive</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Investor Relations</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Customer Service</a>
            </div>
            <div className="col-md-2">
                <h3>Careers</h3>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Culture and Values</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Inclusion, Diversity, and Equity</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>College Achievement Plan</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Alumni Community</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>U.S Careers</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>International Carrers</a> <br/>
            </div>
            <div className="col-md-2">
                <h3>Social Impact</h3>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>People</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Planet</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Enviromental and Social Impact Reportng</a> <br/>
            </div>
            <div className="col-md-2">
                <h3>For Business Partners</h3>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Landlord Suport Center</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Suppliers</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Corporate Gift Card Sales</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Office and Foodservice Coffe</a> <br/>
            </div>
            <div className="col-md-2">
                <h3>Order and Pickup</h3>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Order on the App</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Order on the Web</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Delivery</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Order and Pickup Options</a> <br/>
                <a href="/" className="anchor-button" style={{color: 'gray', textDecoration: 'none', fontSize: '1.2em'}}>Explore and Find Coffee for Home</a> <br/>
            </div>
        </div>
    );
};

export default Footer;