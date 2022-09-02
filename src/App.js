import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>      
    )
}

export default App;