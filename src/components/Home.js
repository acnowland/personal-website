import React from 'react'
import '../css/LadingPage.css'
import { SocialIcon } from 'react-social-icons'

const Home = () => {
    return (
        <div className='background'>
            <div className='welcome-hero'>
                <h2 className='hello-hero'>Welcome!</h2>
                <h2>I am Adam,</h2>
                <h2>A FullStack Web Developer</h2>
                <p>
                    <SocialIcon  url="https://www.linkedin.com/in/adam-nowland/" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon  url="https://github.com/acnowland" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </p>
            </div>
        </div>
    )
}

export default Home
