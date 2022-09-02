import React from "react";
import Hero from '../components/Hero';
import Ad from '../components/AdSection';
import Categories from '../components/Categories';
import CallToAction from '../components/CallToAction';

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <Ad />
            <Categories />
            <CallToAction />
        </React.Fragment>
    )
}

export default Home;