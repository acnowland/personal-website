import React from 'react'
import '../css/Resume.css'

import ResumePDF  from '../picture/adamResume.pdf'


const Resume = () => {
    return (
        <main className='post-page-container'>
        <div className='top-filler'>

        </div>
        
        <div className='title-card-container'>
            <div className='contact-container'>
                <div className='contact-me'>
                    <div className='contact-top'>
                        <h2>Contact Me</h2>

                    </div>
                    <div className='contact-bottom'>
                        <div className='email-container'>
                            <h3>Email</h3>
                            <a href="mailto:acnowland@gmail.com">Adam Nowland</a>
                        </div>
                        <div className='linked-in-container'>
                            <h3>Linked in</h3>
                            <a href="https://www.linkedin.com/in/adam-nowland/" target="_blank" rel="noreferrer">@Here!</a>
                        </div>
                        <div className='resume-container'>
                            <a href={ResumePDF} download="adam_nowland_resume">Download Resume</a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    )
}

export default Resume
