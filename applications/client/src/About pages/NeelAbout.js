import '../App.css';
import React from 'react';
import neelImage from './neel-profile.jpg';
import Navbar from '../Navbar';


function NeelAbout() {
    return (
        <>
            <Navbar />
            <div className="neel-body-div">
                <div className='neel-image-div'>
                    <img className='neel-image' src={neelImage} alt='This is Neel' />
                </div>
                <div className="neel-info-div">My name is Neel Manthani and I am part of backend development</div>
            </div>
        </>
    );
};

export default NeelAbout;