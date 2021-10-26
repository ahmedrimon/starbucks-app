import React from 'react';

const ExtraData = ({extra}) => {
    return (
        <div style={{padding: '2em', marginLeft: '17em'}}>
            <img src={extra.image} alt=""/>
            <h2>{extra.title}</h2>
            <p style={{fontWeight: 'bold'}}>{extra.titleOne}</p>
            <p>{extra.titleTwo}</p>
        </div>
    );
};

export default ExtraData;