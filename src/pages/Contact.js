import React from 'react';

const Contact = () => {
    return (
        <section className='contact-section'>
            <div className='contact-header'>
                <h1>Contact Us</h1>
            </div>
            <section className='contact'>
                <div className='contact-wrapper'>
                    <div className='contact-wrapper-left'>
                        <h5>Contact Us</h5>
                        <h2>Hello, what's on your mind?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla elit dolor, blandit vel euismod ac, lentesque et dolor. 
                            Ut id tempus ipsum.
                        </p>
                    </div>
                    <div className='contact-wrapper-right'>
                        <form className='contact-form'>
                            <div className='nm-flex'>
                                <div className='form-group name'>
                                    <input type='text' placeholder='Name *' className='c-form-control' id='name' />
                                </div>
                                <div className='form-group email'>
                                    <input type='text' placeholder='Email *' className='c-form-control' id='email' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <select name='option' className='c-form-control'>
                                    <option value='' disabled defaultValue>Select Category</option>
                                    <option value='1' className='option'>Laptop</option>
                                    <option value='2' className='option'>Iphone</option>
                                    <option value='3' className='option'>Other</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <textarea type='text' rows='8' cols='10' placeholder='Message *' className='c-form-control' />
                            </div>
                            <div className='form-group'>
                                <button className='contact-btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact;