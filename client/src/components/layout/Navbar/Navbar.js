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
                <Link to="/sponsors">
                    <h1 className="nav-title">Sponsors</h1>
                </Link>
                <div>
                    <a href="https://www.eventbrite.com/e/slam-jam-3-an-annual-israeliamerican-talent-show-tickets-229032050027">
                      <button className="tix-btn">Tickets</button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar