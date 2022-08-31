import React from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Ad from './Ad-section';
import Category from './Categories';
import CallToAction from './Call-to-action';
import Footer from './Footer';

const App = () => {
    return(
        <React.Fragment>
            <Navbar />
            <Hero />
            <Ad />
            <Category />
            <CallToAction />
            <Footer />
        </React.Fragment>
        
    )
}

export default App;