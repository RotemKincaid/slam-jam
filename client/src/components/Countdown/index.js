import React from 'react'
import NumberWord from './components/NumberWord'
import './index.css'

const CountdownIndex = () => {
    return (
        <div className="countdown-container">
            {/* <h2 className="countdown-clock"> 00 : 00 : 34 : 55</h2> */}
            <div className="countdown-clock">
                <NumberWord number="00" text="days"/> &nbsp;:&nbsp;
                <NumberWord number="00" text="hours"/> &nbsp;:&nbsp;
                <NumberWord number="00" text="minutes"/> &nbsp;:&nbsp;
                <NumberWord number="00" text="seconds"/>
            </div >
        </div>
    )
}

export default CountdownIndex
