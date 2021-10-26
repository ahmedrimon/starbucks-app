import React from 'react';
import './Favourite.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import imgFavo from '../../../images/imgFavourite.png';

const Favourite = () => {
    return (
        <div className="mt-5">

            <div className="favourite-first text-center pt-5">
                <h2 style={{fontWeight: 'bold'}}>Get your favorites for free</h2> <br/>
                <div className="d-flex icon-center">
                    <h3 className="mx-3">25<FontAwesomeIcon className="icon-size" icon={faStar} /></h3>
                    <h3 className="mx-3">50 <FontAwesomeIcon className="icon-size" icon={faStar} /></h3>
                    <h3 className="mx-3">150<FontAwesomeIcon className="icon-size" icon={faStar} /></h3>
                    <h3 className="mx-3">200<FontAwesomeIcon className="icon-size" icon={faStar} /></h3>
                    <h3 className="mx-3">400<FontAwesomeIcon className="icon-size" icon={faStar} /></h3>
                </div>
            </div>

            <div className="favorite-second d-flex">
                <div className="col-md-4 imgFavo-center">
                    <img className="imgFavo" src={imgFavo} alt=""/>
                </div>
                <div className="col-md-8 second-para">
                    <h4 style={{fontWeight: 'bold'}}>Customize your drink</h4>
                    <p>Make your drink just right with an extra <br/> espresso shot, dairy substitute or a dash of <br/> your favorite syrup.</p>
                </div>    
            </div>

        </div>
    );
};

export default Favourite;