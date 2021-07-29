import React from 'react'
import "./Navbar.css"
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from 'react-router-dom'



const Navbar = (props) => {
    const {location} = props
    
    const homeClass = location.pathname === '/' ? 'active-item':' ';
    const aboutClass = location.pathname === '/about' ? 'active-item':' ';
    const projectClass = location.pathname === '/project' ? 'active-item':' ';
    const skillsClass = location.pathname === '/skills' ? 'active-item':' ';
    const contactClass = location.pathname === '/contact' ? 'active-item':' ';
   
    return (
        <div>
            <Menu>
                <Link to="/" className={`menu-item ${homeClass}`}>
                   Home
                </Link>
                <Link to="/about"  className={`menu-item ${aboutClass}`}>
                   About
                </Link>
                <Link to="/skills"  className={`menu-item ${skillsClass}`}>
                 Skills
                </Link>
                <Link to="/projects"  className={`menu-item ${projectClass}`}> 
                  Projects
                </Link>
                <Link to="/contact"  className={`menu-item ${contactClass}`}>
                   Contact
                </Link>
            </Menu>
        </div>
    )
}

export default withRouter(Navbar)
