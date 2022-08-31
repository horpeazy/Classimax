import React from 'react';


const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-top'>
                <div className='info'>
                    <img src='./images/footer/logo-footer.png' alt='logo-footer'></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className='site'>
                    <h4>site pages</h4>
                    <ul>
                        <li><a href='/' >Boston</a></li>
                        <li><a href='/'>How It Works</a></li>
                        <li><a href='/'>Deals & Coupons</a></li>
                        <li><a href='/'>Articles & Tips</a></li>
                        <li><a href='/'>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='admin'>
                    <h4>admin pages</h4>
                    <ul>
                        <li><a href='/'>Category</a></li>
                        <li><a href='/'>Single Page</a></li>
                        <li><a href='/'>Store Single</a></li>
                        <li><a href='/'>Single Post</a></li>
                        <li><a href='/'>Blog</a></li>
                    </ul>
                </div>
                <div className='footer-app-store'>
                    <div className='footer-app-store-top'>
                        <img src='./images/footer/phone-icon.png' alt='phone'></img>
                        <p>Get the Dealsy Mobile App and Save more</p>
                    </div>
                    <div className='footer-app-store-bottom'>
                        <img src='./images/apps/google-play-store.png' alt='google-logo'></img>
                        <img src='./images/apps/apple-app-store.png' alt='apple-app'></img>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright © 2022. All Rights Reserved</p>
                <ul>
                    <li>
                        <a href='/'><i className='fa fa-facebook'></i></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-pinterest'></i></a>
                    </li>
                    <li>
                        <a href='/'><i className='fa fa-vimeo'></i></a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;