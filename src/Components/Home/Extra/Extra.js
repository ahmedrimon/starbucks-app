import React from 'react';

import fun from '../../../images/fun-freebies.png';
import pay from '../../../images/pay-ahead.png';
import free from '../../../images/free-faster.png';

import ExtraData from '../ExtraData/ExtraData';

const Extra = () => {

    const extraData = [
        {
            image: fun,
            title: "Fun freebies",
            titleOne: "Not only can you earn free coffee, look forward to a",
            titleTwo: "birthday treat plus coffee and tea refills."
        },
        {
            image: pay,
            title: "Fun freebies",
            titleOne: "Enjoy the convenience of in-store, curbside or",
            titleTwo: "drive-thru pickup at select stores."
        },
        {
            image: free,
            title: "Fun freebies",
            titleOne: "Earn Stars even quicker with Bonus Star challenges,",
            titleTwo: "Double Star Days and exciting games."
        }
    ]
    return (
        <div className="mt-5 text-center">
            <h2 style={{fontWeight: 'bold'}}>Endless Extras</h2>
            <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy</p>
            <p>ordering, tasty Rewards and—yes, free coffee.</p>

            <div className="d-flex w-75">
                {
                    extraData.map((extra) => (<ExtraData extra={extra}></ExtraData>))
                }
            </div> 
        </div>
    );
};

export default Extra;