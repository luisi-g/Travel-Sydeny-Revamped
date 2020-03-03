import React from 'react';
import './heroExplore.scss'
const ExploreHero = () => {
    return (
        <div className="explore">
            <div className="explore__herotext">
                <h1>Explore</h1>
                <p>Find out what Sydeny has to offer</p>
            </div>
            <div className="video__button" onClick={mobileScroll}>
                <button>&#11147;</button>
            </div>
        </div>
    )
}

const mobileScroll = () => {
    document.getElementById("#").scrollIntoView()
}
export default ExploreHero