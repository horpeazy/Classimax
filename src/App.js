import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About  from './pages/About';
import Dashboard from './pages/Dashboard';
import Package from './pages/Package';
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
                <Route path='/about' element={<About />}/>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/package' element={<Package />} />
            </Routes>
            <Footer />
        </Router>      
    )
}

export default App;