import React from 'react';
import HeroVid from '../../../assets/video/HeroVid.mp4'

import './_hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={HeroVid} type="video/mp4" />
            </video>
            <div className="video">
                <h1>Sydney, Australia</h1>
                <p>Welcome to the down under</p>
                <div className="video__button" onClick={mobileScroll}>
                    <button>&#11147;</button>
                </div>

            </div>
        </div>
    )
}

const mobileScroll = () => {
    document.getElementById("introInfo").scrollIntoView()
}
export default Hero; 