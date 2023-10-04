import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/tymLanding.css'
import '../css/tymRegistration.css'
import { LoginRouteBlocker } from '../helper_files/RouteBlocker';


export function TymLoginPage() {
    const navigate = useNavigate('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    LoginRouteBlocker();

    const send_login_info = () => {
        setError("");

        const body = {
            email: email,
            password: password,
        };
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        };

        fetch('https://csc.csc648team06.com/api/user/Login', settings)
            // fetch('/api/user/Login', settings)
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data)
                    if (data.result) {
                        console.log(data)
                        setError(data.msg)
                        setTimeout(() => {
                            navigate('/tymHome')
                        }, 800);
                    } else {
                        console.log("login not valid")
                        setError(data.msg)
                    }

                }
            )
            .catch(err => console.log(err))

        fetch('https://csc.csc648team06.com/api/user/Get_Session_Data')
            // fetch('/api/user/Get_Session_Data')
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data.email.email)
                }
            )
            .catch(console.log)

        fetch('https://csc.csc648team06.com/api/user/Get_Session_Data')
            // fetch('/api/user/Get_Session_Data')
            .then(
                response => response.json()
            ).then(
                data => {
                    console.log(data.email.email)
                }
            )
            .catch(console.log)


    }

    return (
        <div className='main-container-log-in'>
            <div className="log-in-card">
                <h4>{error}</h4>
                <h1 className='log-in'>Welcome to TYM</h1>
                <div className='email'>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='password'>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </div>
                <div className='log-in-button main-button'>
                    <button data-testid="jest-test"
                        onClick={send_login_info}
                    >Log In</button>
                </div>
                <p>{notValid}</p>
                <div className='offers'>
                    <p>Don't have an account yet?
                        <b><u>
                            <span>
                                <a href="/registration">Sign Up</a>
                            </span>
                        </u></b> instead</p>
                </div>
            </div>
        </div>
    );
};

export default TymLoginPage;
