import React from 'react'
import Countdown from '../../Countdown/index'
import './index.css'

const LandingIndex = () => {
    return (
        <div className="landing-container">
            <div className="headings">
                <h1 className="title">The biggest, most <br></br> exciting event of the year <br></br> is back.</h1>
                <h3 className="location-date">CB Live | February 3rd, 2022</h3>
            </div>
            <Countdown />
        </div>
    )
}

export default LandingIndex
