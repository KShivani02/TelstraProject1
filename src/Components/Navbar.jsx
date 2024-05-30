import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from './Assets/Logo.png';

const Navbar= () =>
{
    const handleLogout = () => {
        window.open("http://localhost:3001/auth/logout","_self");
    }
    return(
        <header>
        <nav>
            <div className='navbar'>
                <img src={Logo} alt="" className="logo"/> 
                <ul>
                    <li>
                    <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/epic'>Epic</NavLink>
                    </li>
                    <li>
                    <NavLink to='/createstory'>Create Story</NavLink>
                    </li>
                    <li>
                    <NavLink onClick={handleLogout}>Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;
