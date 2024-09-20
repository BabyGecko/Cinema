import { useState } from 'react'
import './Seats.sass'
import bArrow from '../../assets/ep_back.svg'
import calendar from '../../assets/calendar.png'

function Seats() {


    return (
        <div className="Seats">
            <header>
                <div className="container">
                    <button><img src={bArrow} alt="" /></button>
                    <h2>Movie Detail</h2>
                    <img src={calendar} />
                </div>
            </header>
        </div>
    )
}

export default Seats