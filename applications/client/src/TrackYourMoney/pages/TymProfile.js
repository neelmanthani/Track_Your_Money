import { React, useState, useEffect } from 'react'
import SideBarComponent from '../components/SideBarComponent';
import profile_circle from '../../icons/account_circle.svg'
import '.././css/tymHome.css'
import '.././css/tymProfile.css'
import { RouteBlocker } from '../helper_files/RouteBlocker';

function TymProfile() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState('');

    useEffect(() => {
        fetch('https://csc.csc648team06.com/api/user/Get_Session_Data')
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data.email.email)
                    setEmail(data.email.email)
                }
            )
            .catch(console.log)
    }, [])
    
    RouteBlocker();

    return (
        <div className='main-container-home'>
            <section className='title'>
                <div><SideBarComponent /></div>
                <h2>Profile</h2>
            </section>

            <section className='profile-intro'>
                <div className='profile-img'>
                    <img src={profile_circle} alt="profile" />
                </div>
                <div className="profile-name">{userName}</div>
            </section>

            <section className='profile-info'>

                <section className="display-name-edit">
                    <label htmlFor="">Display Name</label>
                    <div className="name-and-btn">
                        <div className='display-name'>
                            <h3>John Doe</h3>
                        </div>
                        <div className="edit-btn">
                            <button className='profile-btn'>Edit</button>
                        </div>
                    </div>
                </section>

                <section className="display-email-edit">
                    <label htmlFor="">Display Email</label>
                    <div className="email-and-btn">
                        <div className="display-email">
                            <h3>{email}</h3>
                        </div>
                        <div className="edit-btn">
                            <button className='profile-btn'>Edit</button>
                        </div>
                    </div>
                </section>

                <section className="display-password-edit">
                    <label htmlFor="">Password</label>
                    <div className="password-and-btn">
                        <div className="display-password">
                            <h3>********</h3>
                        </div>
                        <div className="pass-change-btn">
                            <button className='profile-btn'>Change</button>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    )
}

export default TymProfile;