import React from 'react'
import './NumberWord.css'

const NumberWord = (props) => {
    return (
        <div className="num-text">
            <h1 className="number">{props.number}</h1>
            <h2 className="text">{props.text}</h2>
        </div>
    )
}

export default NumberWord
