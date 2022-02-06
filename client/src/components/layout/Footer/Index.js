import React from 'react'
import './index.css'
import fbLogo from '../../../assetts/images/FB-logo.png'
const FooterIndex = () => {
    return (
        <div className="footer-wrapper">
            <div className='follow'>Follow us on:</div>
          <div className='facebook'>
            <a href="https://www.facebook.com/SlamJamProd">
              <img src={fbLogo} alt="" />
            </a>
            </div>
        </div>
    )
}

export default FooterIndex
