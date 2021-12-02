import React from 'react'
import Countdown from '../../Countdown/index'
import './index.css'

const LandingIndex = () => {
    return (
        <div className="landing-container">
            <h1 className="title">The biggest, most <br></br> exciting event of the year <br></br> is back.</h1>
            <Countdown />
        </div>
    )
}

export default LandingIndex
