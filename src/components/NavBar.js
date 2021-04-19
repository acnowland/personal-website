import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className='navigation-bar'>
            <div>
                <nav>
                    <NavLink to="/project" className='link'>
                        Projects
                    </NavLink>

                    <NavLink to="/post" className='link'>
                        Blog
                    </NavLink>

                    <NavLink to="/" exact className='hero-name'>
                        Adam Nowland
                    </NavLink>

                    <NavLink to="/about" className='link'>
                        About Me
                    </NavLink>

                    <NavLink to="/resume" className='link'>
                        Resume
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
