import React from 'react'

const Hero = () => {
    return (
        <React.Fragment>
            <div className='hero overlay'>
                {/* <div className='overlay'></div> */}
                <div className='hero-content'>
                    <h1>Buy & Sell Near You</h1>
                    <p>
                        Join the millions who buy and sell from each other 
                        <br />
                        everyday in local communities around the world
                    </p>
                    <div className='popular-category'>
                        <h2>popular category</h2>
                        <ul className='popular-category-list'>
                            <li><a href='/'>hotel</a></li>
                            <li><a href='/'>fitness</a></li>
                            <li><a href='/'>cars</a></li>
                            <li><a href='/'>restaurants</a></li>
                            <li><a href='/'>cafe</a></li>
                        </ul>
                    </div>
                </div>
                <form className='search-form'>
                    <div className='form-group'>
                        <input type='text' name='item' 
                            placeholder='What are you looking for'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <select name='option' className='form-control'>
                            <option value='' disabled defaultValue>Category</option>
                            <option value='1' className='option'>Top Rated</option>
                            <option value='2' className='option'>Lowest Price</option>
                            <option value='3' className='option'>Highest Price</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <input type='text' name='location'
                            placeholder='Location'
                            className='form-control'
                        />
                    </div>
                    <button type='submit'>Search Now</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Hero;