import React from 'react'
import '../css/About.css'
import ProfilePic from '../picture/AdamAnia.jpg'
import { DiRuby } from 'react-icons/di'
import { SiRails } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiDjango } from 'react-icons/di'
import { DiSwift } from 'react-icons/di'
import { IconContext } from 'react-icons/lib'
import { AiFillGithub } from 'react-icons/ai'


const About = () => {
    
    return (
        <main className='post-page-container'>
            <div className='top-filler'>

            </div>
            
            <div className='title-card-container'>
                <div className='about-container'>
                    <div className='about-me'>
                        <h2>
                            About Me
                        </h2>
                        <div className='lower-components'>
                            <div className='left-about'>
                                <div className='top-left-about'>
                                    <div className='pic-container'>
                                        <img src={ProfilePic} alt="profile pic"/>
                                    </div>
                                </div>
                                <div className='bottom-left-about'>
                                    <div className='bottom-left-skills'>
                                        Skills
                                    </div>
                                    <div className='bottom-left-skill-div'>
                                        <IconContext.Provider
                                            value={{
                                                size: "4em",
                                                style: { margin: "5px" }
                                            }}

                                        >
                                            <div className='top-skills'>
                                                <DiRuby />
                                                <SiRails />
                                                <DiJavascript />
                                                <DiReact />
                                            </div>
                                            <div className='bottom-skills'>
                                                <DiPython />
                                                <DiDjango />
                                                <DiSwift />
                                                <AiFillGithub />
                                            </div>

                                        </IconContext.Provider>

                                    </div>
                                </div>
                            </div>
                            <div className='right-about'>
                                <p>
                                    Hello! I am Adam, a Full Stack Web Developer currently based in the greater Denver area,
                                    soon making the move out west to the Bay Area. I started my career as a Foot and Ankle Surgeon 
                                    on the east coast where I completed medical school and did my residency. I worked for 2.5 years 
                                    as a surgeon following that and as time progressed I was slowly losing my love for medicine. 
                                    As pressures from insurances companies increased, we were forced to see more and more patients. 
                                    In doing this, you lose that personal touch..the reason you go into medicine..to actually treat a patient
                                    and devote time to them. So, when COVID hit, I ended up getting furloughed and decided that it was a perfect
                                    opportunity to make a change in my life. I picked up Python and practiced with EdX courses and LeetCode. 
                                    My past experiences in medical school and as a surgeon taught me strict discipline for studying. It also taught 
                                    me how to adapt to change and overcome complex obstacles quickly; these traits aligned perfectly for learning coding. 
                                    My wife went remote and, unfortunately, I ended up getting laid off from my practice. We decided to make a move 
                                    westward and landed in Colorado! Now, I am almost finished with my bootcamp at FlatIron School. I look forward to 
                                    getting a job in software development and I feel that I have a huge amount to offer with my background. 
                                    
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
