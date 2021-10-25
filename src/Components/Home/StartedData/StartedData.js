import React from 'react';

const StartedData = ({start}) => {
    return (
        <div className="col-md-4 mt-5">
            <img className="mt-3" style={{width: '10%'}} src={start.images} alt="firstImage"/>
            <h2 className="mt-4">{start.title}</h2>
            <small className="mt-4">{start.description}</small>
        </div>
    );
};

export default StartedData;