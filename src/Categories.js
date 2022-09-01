import React, { useState, useEffect } from 'react'
import { category_list } from './data';

const Category = () => {
    const defaultShow = (window.innerWidth > 375) ? true : false
    const [showMore, setShowMore] = useState(defaultShow);
    const categories = showMore ? category_list : category_list.slice(0, 4);

    const resetShow = () => {
        if(window.innerWidth > 375){
            setShowMore(true);
        } else {
            setShowMore(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', resetShow);
        return () => {
            window.removeEventListener('resize', resetShow);
        };
    }, []);
    return (
        <section className='categories' >
            <h3>All Categories</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, provident!
            </p>
            <div className='slider-indicator'></div>
            <div className='category-list'>
                {categories.map(((category) => {
                    return (
                        <div className='single-category' key={category.id}>
                            <div className='single-category-header'>
                                <i className={`fa ${category.icon}`}></i>
                                <h4>{category.name}</h4>
                            </div>
                            <ul>
                                {category.items.map((item, index)=> {
                                    return (
                                        <li key={index}>
                                            <a href='/'>
                                                <span className='item-name'>{item.name}</span>
                                                <span>{item.count}</span>
                                            </a>
                                        </li>
                                    )
                                })} 
                            </ul>
                        </div>
                    )
                }))} 
            </div>  
            <button className='btn show-btn' onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>  
        </section>
    )
}

export default Category;