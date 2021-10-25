import React from 'react';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Reward from '../Reward/Reward';
import Started from '../Started/Started';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Reward></Reward>
            <Hero></Hero>
            <Started></Started>
        </div>
    );
};

export default Home;