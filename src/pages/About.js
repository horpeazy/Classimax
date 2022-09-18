import React from 'react';
import { feedbackData } from '../data';

const About = () => {
    // const counterBoxRef = useRef(null);
    return (
        <section className='about-section'>
            <div className='about-header'>
                <h2>About Us</h2>
            </div>
            <div className='about-main'>
                <div className='about-intro'>
                    <div className='about-image-wrapper'>
                        <img src='./images/about/about.jpg' alt='about'/>
                    </div>
                    <div>
                        <h3>introduction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo,
                            aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu.
                            Vivamus dictum tincidunt magna id euismod. Nam sollicitudin mi quis orci
                            lobortis feugiat.
                        </p>
                        <h3>How we can help</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam 
                            nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum 
                            tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem 
                            ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor 
                            fermentum, commodo et libero. Quisque et rutrum arcu. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et 
                            libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id euismod. Nam
                            sollicitudin mi quis orci lobortis feugiat.
                        </p>
                    </div>
                </div>
                <div className='about-team'>
                    <h2>our team</h2>
                    <div className='team-members'>
                        <div className='profile'>
                            <img src='./images/team/team1.jpg' alt='team-member'/>
                            <div className='profile-title'>
                                <h4>john doe</h4>
                                <p>Founder / CEO</p>
                            </div>
                        </div>
                        <div className='profile'>
                            <img src='./images/team/team2.jpg' alt='team-member'/>
                            <div className='profile-title'>
                                <h4>foo gazy</h4>
                                <p>Manager</p>
                            </div>
                        </div>
                        <div className='profile'>
                            <img src='./images/team/team3.jpg' alt='team-member'/>
                            <div className='profile-title'>
                                <h4>larry white</h4>
                                <p>Secretary</p> 
                            </div>
                        </div>
                        <div className='profile'>
                            <img src='./images/team/team4.jpg' alt='team-member'/>
                            <div className='profile-title'>
                                <h4>ken thompson</h4>
                                <p>Product Lead Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-section-review'>
                    {feedbackData.map((data, index) => {
                        return (
                            <div className='feedback' key={index}>
                                <i className={`fa ${data.icon}`}></i>
                                <span className='counter' data-count={data.value}>0</span>
                                <h5>{data.category}</h5>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default About;