import React from 'react';
import aboutImage from "../images/about.png"
const About = () => {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMMING EVENT</h1>
                <p>All classic children’s books are works of philosophy in one sense or another. A grown-up novel may make all its points with action and emotion</p>
                <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutImage} alt='' />
            </div>
        </div>
    );
};

export default About;