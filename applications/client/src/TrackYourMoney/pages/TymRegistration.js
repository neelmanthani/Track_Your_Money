import { useState } from 'react';
import '../css/tymLanding.css'
import '../css/tymRegistration.css'
import { LoginRouteBlocker } from '../helper_files/RouteBlocker';

export function TymRegistration() {

    LoginRouteBlocker();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const send_reg_info = () => {
        console.log("in send_reg_info");

        const body = {
            email: email,
            password: password,
        };
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        };

        console.log(settings);

        fetch('https://csc.csc648team06.com//api/user/Registration', settings)
        // fetch('/api/user/Registration', settings)
            .then(response => {
                console.log(response)

            })
            .catch(console.log)
    }

    return (
        <div className='main-container-sign-up'>
            <div className="sign-up-card">
                <h1 className='sign-up'>Sign Up</h1>
                <div className='email'>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='password'>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                </div>
                <div className='sign-up-button main-button'>
                    <button onClick={send_reg_info}>Sign Up</button>
                </div>
                <div className='offers'>
                    <p>Already got an account?
                        <b><u>
                            <span>
                                <a href="/login">Log In</a>
                            </span>
                        </u></b> instead</p>
                </div>
            </div>
        </div>
    );
};

export default TymRegistration;
