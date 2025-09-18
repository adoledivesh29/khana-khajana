import React from 'react'
import logo from '../../assets/images/Foodieland.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/recipes'>Recipes</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>

            <div className='social-links'>
                <Link to='/'>
                    <FaFacebook />
                </Link>
                <Link to='/'>
                    <FaInstagram />
                </Link>
                <Link to='/'>
                    <FaTwitter />
                </Link>
                <Link to='/'>
                    <FaYoutube />
                </Link>
            </div>
        </div>
    )
}

export default Navbar