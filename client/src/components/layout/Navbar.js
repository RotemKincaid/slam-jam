import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1>
                <Link to="/">
                <i>Slam Jam Logo </i>
                </Link>
            </h1>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Navbar