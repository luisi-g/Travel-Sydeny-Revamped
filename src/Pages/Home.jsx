import React from 'react';

import Hero from '../Components/Home/Hero/Hero'
import Intro from '../Components/Home/Intro/Intro';
import '../Components/_main.scss'

const Home = () => {
    return(
        <div>
            <Hero />
            <Intro />
        </div>
    )
}

export default Home;