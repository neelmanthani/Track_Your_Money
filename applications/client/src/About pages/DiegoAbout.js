import '../App.css';
import React from 'react';
import diegoPic from './diego-islas.jpg';
import Navbar from '../Navbar';

function DiegoAbout() {
    return (
        <>
            <Navbar />
            <div className="diego-body-div">
                <div className="diego-pic-div"><img src={diegoPic} className='diego-pic' alt="this is diego's pic" /></div>
                <div className="diego-info-div"><h1 className='diego-info'>My name is Diego and I am the github specialist on my team</h1></div>
            </div>
        </>
    );
};

export default DiegoAbout;
