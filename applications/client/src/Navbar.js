import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <>
            <header className="App-header">
                <h1>This is our about list</h1>
            </header>

            <div className='nav-div'>
                <Link className="team-names" to="/"><li>Home</li></Link>
                <Link className="team-names" to="/DiegoAbout"><li>Diego Islas</li></Link>
                <Link className="team-names" to="/SihamAbout"><li>Siham Argaw</li></Link>
                <Link className="team-names" to="/HemantAbout"><li>Hemanta Thapa</li></Link>
                <Link className="team-names" to="/NeelAbout"><li>Neel Manthani</li></Link>
                <Link className="team-names" to="/RobertAbout"><li>Robert Sato</li></Link>
            </div>

        </>
    )
}

export default Navbar