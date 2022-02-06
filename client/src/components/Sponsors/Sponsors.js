import React from 'react'
import './Sponsors.css'
import david from '../../assetts/images/sponsor-icons/David-Lethcho.png'
import big from '../../assetts/images/sponsor-icons/big.jpg'
import wachsfield from '../../assetts/images/sponsor-icons/Wachsfield.png'
import dentalBros from '../../assetts/images/sponsor-icons/DB-Logo.png'
import nachumComp from '../../assetts/images/sponsor-icons/Nahum-companies.png'
import guidely from '../../assetts/images/sponsor-icons/guidely-logo.png'
import luba from '../../assetts/images/sponsor-icons/Luba-Live-Better.png'
import caratSmart from '../../assetts/images/sponsor-icons/carat-smart-logo-web.png'
import iac from  '../../assetts/images/sponsor-icons/IAC-logo.png'
import federation from '../../assetts/images/sponsor-icons/federation-logo.png'
import aita from '../../assetts/images/sponsor-icons/AITA-logo.png'

const Sponsors = () => {
    return (
        <div className="sponsors-container">
            <h1>Slam Jam of 2022 is sponsored by:</h1>
            <div className='sponsor'>
                <img src={david} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={big} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={wachsfield} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={dentalBros} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={nachumComp} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={guidely} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={luba} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={caratSmart} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={iac} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={federation} alt="" />
                <a href=""></a>
            </div>
            <div className='sponsor'>
                <img src={aita} alt="" />
                <a href=""></a>
            </div>
        </div>
    )
}

export default Sponsors
