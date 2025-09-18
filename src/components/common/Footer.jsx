import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Foodieland.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="main">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <span>Lorem ipsum dolor sit amet, consectetuipisicing elit, </span>
                </div>

                <div className='social-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/recipes'>Recipes</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>

            <div className='copyright'>
                <span>Copyright © 2025 Foodieland. All rights reserved.</span>

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
                </div>
            </div>

        </div>
    )
}

export default Footer