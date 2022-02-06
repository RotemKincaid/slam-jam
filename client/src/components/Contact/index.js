import React from "react";
import './index.css'

const ContactIndex = () => {
    return (
        <div className="contact-container">
            Please send us an email to admin@slam-jam.com!
            <div className="form-container">
            <form action="submit">
                <label htmlFor="">Name:</label>
                <input type="text" value=""/>
                <label htmlFor="">Name:</label>
                <input type="text" value=""/>
                <label htmlFor="">Name:</label>
                <input type="text" value=""/>
                <label htmlFor="">Name:</label>
                <input type="text" value=""/>
                <label htmlFor="">Name:</label>
                <textarea type="text" value=""/>
            </form>
            </div>
        </div>
    )
}

export default ContactIndex