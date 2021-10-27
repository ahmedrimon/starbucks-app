import React from "react";
import "./CashCard.scss";

import scan from "../../../images/scan.png";
import payment from "../../../images/payment.png";
import load from "../../../images/load.png";
import register from "../../../images/register.png";
import visa from "../../../images/visa.png";

const CashCard = () => {
  return (
    <div className="cashcard-container mt-5">
      <div className="cashcard-top">
        <h2 style={{ fontWeight: "bold" }}>Cash or card, you earn Stars</h2>
        <p>
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to
        </p>
        <p>(really delicious) Rewards.</p>
      </div>

      <div className="container d-flex pt-5 hr-tag">
        <div className="col-md-2">
            <h2>1★ per dollar</h2>
            <p>Pay as you go</p>
        </div>
        <div className="col-md-5 d-flex">
            <div>
                <img src={scan} alt=""/>
            </div>
            <div className="mx-4">
                <h3>Scan and pay separately</h3>
                <p>Use cash or credit/debit card at the <br/> register.</p> 
            </div>  
        </div>
        <div className="col-md-5 d-flex">
            <div>
                <img src={payment} alt=""/>
            </div>
            <div className="mx-4">
                <h3>Save payment in the app</h3>
                <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>     
            </div>    
        </div>
      </div>

      <div className="container d-flex pt-5 hr-tag">
        <div className="col-md-2">
            <h2>2★ per dollar</h2>
            <p>Add funds in the app</p>
        </div>
        <div className="col-md-5 d-flex">
            <div>
                <img src={load} alt=""/>
            </div>
            <div className="mx-4">
                <h3>Scan and pay separately</h3>
                <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p> 
            </div>  
        </div>
        <div className="col-md-5 d-flex">
            <div>
                <img src={register} alt=""/>
            </div>
            <div className="mx-4">
                <h3>Save payment in the app</h3>
                <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>     
            </div>    
        </div>
      </div>

      <div className="container d-flex pt-5">
        <div className="col-md-2">
            <h2>Up to 3★ per dollar</h2>
            <p>With Starbucks® Rewards Visa® Card</p>
        </div>
        <div className="col-md-5 d-flex">
            <div>
                <img src={visa} alt=""/>
            </div>
            <div className="mx-4">
                <h3>Earn Stars even faster</h3>
                <p>Earn Stars on all purchases you make with our 
credit card
opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p> 
            </div>  
        </div>
      </div>



    </div>
  );
};

export default CashCard;
