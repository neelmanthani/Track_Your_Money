import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import '.././css/tymLanding.css'
import TymHomePage from './TymHomePage'

function TymLandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  return (

    <>
      <div className='main-container-landing'>

        <section className='title'>
          <h3>Track Your Money</h3>
        </section>

        <section className='hero'>
          <h2> Take Control Of your money</h2>
          <p>Keep track of your small expenses to keep your financial life in track.</p>
        </section>

        {/* <section className="login_buttons"> */}
        <section className="main-button login_buttons">
          <button onClick={handleLogin}>Log In</button>
          <button onClick={() => navigate('/registration')}>Sign Up</button>
        </section>

      </div>


      <Routes>
        <Route path='/tymHome' element={<TymHomePage />}></Route>
        {/* <Route path='/registration' element={<TymRegistration />}></Route> */}
        {/* <Route path='/login' element={<TymLoginPage />}></Route> */}


      </Routes>
    </>
  )

}

export default TymLandingPage