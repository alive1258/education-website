import React from 'react';
import AboutCard from '../../about/AboutCard';
import Footer from '../../common/footer/Footer';
import Hero from '../Hero';
import Test from '../testimonial/Test';
import HAbout from './HAbout';
import Hblog from './Hblog';
import Hprice from './Hprice';

const Home = () => {
    return (
        <div>
            <Hero /><br /><br />
            <AboutCard />
            <HAbout />
            <Test />
            <Hblog />
            <Hprice />
            


        </div>
    );
};

export default Home;