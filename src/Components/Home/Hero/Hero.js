import React from 'react';
import HeroVid from '../../../assets/video/HeroVid.mp4'

import './_hero.scss'

const Hero = () => {
    return (
        <div className="hero">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src={HeroVid} type="video/mp4" />
            </video>
            <div className="video__text">
                <h1>Sydney, Australia</h1>
                <p>Welcome to the down under</p>
            </div>
        </div>
    )
}

export default Hero; 