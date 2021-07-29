import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Wanderer  || Programmer || Volunteer at Calvary Community Trust'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Wanderer </h3>
                    <p className='about-details'>
                        I love to travel to new places , meet new people and learn new things.
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Programmer</h3>
                    <p className='about-details'>
                        I love programming and building stuffs from scratch
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;