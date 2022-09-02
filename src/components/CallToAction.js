import React from 'react'

const CallToAction = () => {
    return (
        <section className='call-to-action'>
            <h2>Start today to get more exposure and grow your business</h2>
            <ul className='call-to-action-button-w'>
                <li className='listing-btn add-listing-btn'>
                    <a href='/'>Add Listing</a>
                </li>
                <li className='listing-btn browser-listing-btn'>
                    <a href='/'>Browser Listing</a>
                </li>
            </ul>
        </section>
    )
}

export default CallToAction;