import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaPlusCircle} from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const dropDown = useRef(null);
    const linkElement = useRef(null);

    const setDropdown = () => {
        dropDown.current.style.display = 'flex';
        const height = dropDown.current.style.maxHeight;
        if (height === '' || height === '0px' ){
            setShowSubmenu(false);
            dropDown.current.style.maxHeight = '465px';
        } else {
            dropDown.current.style.maxHeight = '0px';
        } 
    }

    const menuHandler = () => {
        if (window.innerWidth < 990){
            setShowSubmenu(!showSubmenu);
        }
    }

    const showSubLink = () => {
        if (window.innerWidth >= 990){
            setShowSubmenu(true);
            const subLink = document.querySelector('.sub-link');
            const linkRect = linkElement.current.getBoundingClientRect();
            const linkMiddle = (linkRect.right - linkRect.left)/2;
            subLink.style.left = `${linkMiddle}px`;
        }
    }
    
    return (
        <nav>
            <div className='navbar-wrapper'>
               <div className='nav-header'>
                    <Link to='/' className='logo'>
                        <img src={logo} alt='logo'/>
                    </Link>
                    <FaBars className='toggle-icon' onClick={setDropdown}/>
                </div>
                <div className='dropdown' ref={dropDown}>
                    <div className='nav-center'>
                        <ul className='nav-links'>
                            <li className='link'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='link' 
                                ref={linkElement}
                                onMouseOver={showSubLink} 
                                onMouseLeave={() => {setShowSubmenu(false)}}
                            >
                                <li onClick={menuHandler}>
                                    Listing<i className='fa fa-angle-down arrow' />
                                </li>
                                <ul 
                                    className={`sub-link ${showSubmenu && 'show'}`}
                                >
                                    <li><a href='/'>Automobiles</a></li>
                                    <li><a href='/'>Phones & Tablets</a></li>
                                    <li><a href='/'>Laptops</a></li>
                                    <li><a href='/'>Clothes</a></li>
                                    <li><a href='/'>Shoes</a></li>
                                </ul>
                            </li>
                            <li className='link'>
                                <a href='/'>About</a>
                            </li>
                            <li className='link'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-buttons'>
                        <button className='login-btn'>Login</button>
                        <button className='btn'><FaPlusCircle />Add Listing</button>
                    </div>
                </div>       
            </div>
        </nav>
    )
}

export default Navbar;