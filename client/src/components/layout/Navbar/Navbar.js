import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
            <h1 className="logo">
                <Link to="/">
                <i>Slam Jam Logo </i>
                </Link>
            </h1>
            <div className="nav">
                <Link to="/about">
                    <h1>About</h1>
                </Link>
                <Link to="/gallery">
                    <h1>Gallery</h1>
                </Link>
                <Link to="/contact">
                    <h1>Contact</h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar