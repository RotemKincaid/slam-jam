import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assetts/images/Logo-slamJam-final.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <h1 className="logo">
                <Link to="/">
                <img className="logo" src={logo} alt="" />
                </Link>
            </h1>
            <div className="nav">
                <Link to="/about">
                    <h1 className="nav-title">About</h1>
                </Link>
                <Link to="/gallery">
                    <h1 className="nav-title">Gallery</h1>
                </Link>
                <Link to="/contact">
                    <h1 className="nav-title">Contact</h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar