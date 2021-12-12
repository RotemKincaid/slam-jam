import React from 'react'
import slamImg from '../../assetts/images/Slam2019.jpg'
import sigal from '../../assetts/images/sigal.jpeg'
import nachum from '../../assetts/images/nachum.jpeg'
import koby from '../../assetts/images/koby-oranski.png'
import rotem from '../../assetts/images/me-website.png'
import oren from '../../assetts/images/oren.jpeg'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="inner-container">
                <h2 className="about-title">What is Slam Jam?</h2>
                <div className="img-text">
                    <img className="slam-img" src={slamImg} alt="" />
                    <div className="about">
                        Slam Jam Productions consists of Israelis and Jewish Americans who came together to bring the favorite music, entertainment and art we all grew to love to the Metro Phoenix area. Our core purpose is to create fun and energetic events that aim to bring our community together while allowing local members to show their artistic talents in a variety of areas.
                    </div>
                </div>
                <h2 className="about-title">Who is behind this?</h2>

                <h2 className="name">Koby (Hetzi Shekel) Oranski</h2>

                <div className="img-text">
                    <img className="koby-img" src={koby} alt="" />
                    <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                </div>

                <h2 className="name">Rotem Kincaid</h2>

                <div className="img-text">
                    <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <img className="sigal-img" src={rotem} alt="" />
                </div>

                <h2 className="name">Sigal Nini Urman</h2>

                <div className="img-text">
                    <img className="sigal-img" src={sigal} alt="" />
                    <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                </div>
                <h2 className="name">Oren Tabib</h2>

                <div className="img-text">
                    <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <img className="sigal-img" src={oren} alt="" />
                </div>

                <h2 className="name">Nachum Erlich</h2>

                <div className="img-text">
                    <img className="sigal-img" src={nachum} alt="" />
                    <div className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                </div>
            </div>
        </div>
    )
}

export default About
