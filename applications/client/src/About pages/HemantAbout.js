import React from 'react'
import './Hemant.css';
import hemant from './hemant-image.jpeg';
import Navbar from '../Navbar';


function HemantAbout() {
    return (
        <>
            <Navbar />
            <div className='about'>

                <div className='image'>
                    <img src={hemant} alt='This is Hemant' />

                </div>
                <div className='basic-info'>
                    <h3 id="name">Hemanta Thapa</h3>
                    <h3 id="role">Role: Front-End Lead</h3>
                </div>

            </div>
        </>
    )
}

export default HemantAbout;