import React, { useState, useEffect } from 'react'
import { data } from '../data'

const Ad = () => {
    const [first, setFirst] = useState(1);
    const lastIndex = data.length;
    useEffect(() => {
      let slider = setInterval(() => {
        setFirst(f => {
            if(f === lastIndex){
                return(1);
            } else {
                return (f + 1);
            }
        });
      }, 2000)
      return () => {
        clearInterval(slider);
      }
    }, [lastIndex])
    
    return (
        <section className='ad-section'>
            <h2>Trending Adds</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quas, magnam.
            </p>
            <div className='slider-indicator'></div>
            <section className='slider'>
                {data.map((product) => {
                    const {id, image_url, name, category, date_listed, description} = product;
                    let rating = product.rating;
                    let ratingList = []
                    for (let i = 0; i < 5; i++) {
                        ratingList.push(<span key={i} className={`fa fa-star ${rating > 0 && 'checked'}`}></span>)
                        rating--;
                    }
                    let position = 'next';
                    if(id === first ) {
                        position = 'first';
                    } else if(id === first + 1 || (first === lastIndex && id === 1)){
                        position = 'second';
                    } else if(id === first + 2 || (first === lastIndex && id === 2)
                            || (first === (lastIndex-1) && id === 1))
                    {
                        position = 'last';
                    } else if (id === first - 1 || (first === 1 && id === lastIndex)) {
                        position = 'prev';
                    }

                    return (
                        <div key={id} className={`slide ${position}`}>
                            <img src={image_url} alt={name} className='product-img'></img>
                            <div className='slide-content'>
                                <p id='name'>{name}</p>
                                <div>
                                    <div className='category'>
                                        <i className='fa fa-folder-open-o small-fa'></i>
                                        {category}
                                    </div>
                                    <div className='date'>
                                        <i className='fa fa-calendar small-fa'></i>
                                        {date_listed}
                                    </div>
                                </div>
                                <p id='description'>{description}</p>
                                <div id='rating'>{ratingList}</div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}

export default Ad;