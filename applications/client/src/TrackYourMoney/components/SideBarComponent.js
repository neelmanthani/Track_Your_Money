import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SideBarItems } from '../helper_files/SideBarItems'

import menu from '../../icons/menu.svg'
import close from '../../icons/close.svg'

import '.././css/tymHome.css'

function SideBarComponent() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const handleLogOut = () => {


    }
    return (
        <section className="navbar">
            <div className="ham-menu">
                <Link to="#" className='menu-bars'>
                    <img src={menu} onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <img src={close} onClick={showSidebar} />
                        </Link>
                    </li>
                    {SideBarItems.map((item, index) => {
                        return (

                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    <a onClick={item.onclick}>
                                    <span>{item.title}</span>
                                    </a>
                                </Link>
                            </li>

                        )
                    })}
                    <button className="log-out-button" onClick={handleLogOut}>Sign Out</button>

                </ul>

            </nav>

        </section>
    )
}

export default SideBarComponent