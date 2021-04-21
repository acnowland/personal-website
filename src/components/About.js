import React from 'react'
import '../css/About.css'
import ProfilePic from '../picture/AdamAnia.jpg'

const About = () => {
    return (
        <main className='post-page-container'>
            <div className='top-filler'>

            </div>
            
            <div className='title-card-container'>
                <div className='about-container'>
                    <div className='about-me'>
                        <h2>
                            Welcome! I am Adam Nowland.
                        </h2>
                        <div className='lower-components'>
                            <div className='left-about'>
                                <div className='top-left-about'>
                                    <div className='pic-container'>
                                        <img src={ProfilePic} alt="profile pic"/>
                                    </div>
                                </div>
                                <div className='bottom-left-about'>
                                    bottom left
                                </div>
                            </div>
                            <div className='right-about'>
                                right side

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
