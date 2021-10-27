import React from 'react';
import './Participate.scss';


const Participate = () => {
    return (
        <div className="participate-container d-flex">
            <div style={{marginTop: '3em', marginLeft: '2em'}} className="col-md-6">
                <p>At participating stores. Restrictions apply.</p>
                <h3>EARNING STARS</h3>
                <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                <h3>BENEFITS</h3>
                <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
            </div>
            <div style={{marginTop: '4.5em', marginLeft: '2em'}} className="col-md-6">
                <h3>TERMS OF USE</h3>
                <p>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the Starbucks Store Locator opens in new window and search for locations honoring “Redeem Rewards”.</p>
                <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                <h3>REDEEMING REWARDS</h3>
                <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.</p>
            </div>
        </div>
    );
};

export default Participate;