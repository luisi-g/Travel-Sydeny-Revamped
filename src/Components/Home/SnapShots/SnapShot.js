import React from 'react';

import animal from '../../../assets/img/animal.jpg';
import jungle from '../../../assets/img/jungle.jpg';
import operaHouse from '../../../assets/img/operaHouse.jpg'

import './snapShot.scss'

const SnapShot = () => {
    return (
        <div className="snapShot">
            <div className="snapShot__bg">
                <img className="snapShot__bg--1" src={operaHouse} atl="" />
                <div className="snapShot__images">
                    <img src={animal} alt="yes" />
                    <img src={jungle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SnapShot;