import React from 'react';
import Info from '../../../infoCards.json'

import Card from '../../Util/Card'

import './_homeCardSection.scss'

const HomeCardSection = () => {
    return (
        <div className="homeCard__bg">
            {Info.infoCards.map((info, index) => {
                return <Card index={index} state={info}/>
            })}
        </div>
    )
}

export default HomeCardSection;