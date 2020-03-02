import React from 'react';

const Card = ({ state }) => {
    return (
        <div className="homeCard__card">
            <img src={state.img} alt={state.alt} />
            <div className="homeCard__card_text">
                <p>{state.text}</p>
                <a href="#">Click Here</a>
            </div>
        </div>
    )
}

export default Card;