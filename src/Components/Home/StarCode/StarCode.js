import React from 'react';
import './StarCode.scss';

const StarCode = () => {
    return (
        <div className="starcode-container">
            <h2 className="star-title">Star Codes</h2>
            <p style={{marginLeft: '40em'}}>Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
            <input style={{marginLeft: '55em'}} type="text" placeholder="Enter your star code"/>
            <button className="green-button">Submit</button>
            <p style={{marginLeft: '55em'}}>Have a receipt but don't have a code?</p>
            <p style={{marginLeft: '40em'}}>Go to <a style={{color: 'green'}} href="/starbucks-stars.com">starbucks-stars.com</a>  opens in new window to upload your receipt and collect your Stars.</p>

            <h2 className="star-title">Questions?</h2>
            <p style={{marginLeft: '22em'}}>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a style={{color: 'green'}} href="/">right over here</a>  opens in new window.</p>
        </div>
    );
};

export default StarCode;