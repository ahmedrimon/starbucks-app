import React from 'react';
import CashCard from '../CashCard/CashCard';
import Extra from '../Extra/Extra';
import Favourite from '../Favourite/Favourite';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Participate from '../Participate/Participate';
import Reward from '../Reward/Reward';
import StarCode from '../StarCode/StarCode';
import Started from '../Started/Started';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Reward></Reward>
            <Hero></Hero>
            <Started></Started>
            <Favourite></Favourite>
            <Extra></Extra>
            <CashCard></CashCard>
            <StarCode></StarCode>
            <Participate></Participate>
            <Footer></Footer>
        </div>
    );
};

export default Home;