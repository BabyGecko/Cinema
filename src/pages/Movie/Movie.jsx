import { useState } from 'react'
import './Movie.sass'
import bArrow from '../../assets/ep_back.svg'
import colorSphere from '../../assets/colorSpheres.svg'
import poster from '../../assets/Rectangle 58.png'
import star from '../../assets/Star 3.svg'

function Movie() {


    return (
        <div className='Movie'>
            <header>
                <div className="container">
                    <button><img src={bArrow} alt="" /></button>
                    <h2>Movie Detail</h2>
                    <span></span>
                </div>
            </header>
            <main>
                <img src={colorSphere} id="cs" />
                <img src={poster} id="poster" />
                <h1>Star Wars</h1>
                <div className="info">
                    <p>1997</p>
                    <span>•</span>
                    <p>Action</p>
                    <span>•</span>
                    <p>2h 31m</p>
                </div>
                <div className='stars'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <p id='desc'>The Star Wars Trilogy Special Edition was a theatrical anniversary edition of the original trilogy, in order to celebrate the 20th anniversary of the release of Star Wars: Episode IV A New Hope.</p>
                <button>
                    BUY TICKET
                    <div className="mask">
                        <div className="color"></div>
                    </div>
                </button>
            </main>
        </div>
    )
}

export default Movie