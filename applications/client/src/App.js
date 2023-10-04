import './App.css';

// about pages 
import Home from './Home';
import Navbar from './Navbar';
import HemantAbout from './About pages/HemantAbout';
import DiegoAbout from './About pages/DiegoAbout';
import SihamAbout from './About pages/SihamAbout';
import NeelAbout from './About pages/NeelAbout';
import RobertAbout from './About pages/RobertAbout';
// ************************ 


// TYM pages 
import { Routes, Route, useNavigate } from 'react-router-dom';
import TymLandingPage from './TrackYourMoney/pages/TymLandingPage';
import TymHomePage from './TrackYourMoney/pages/TymHomePage';
import TymIncomePage from './TrackYourMoney/pages/TymIncomePage';
import TymRegistration from './TrackYourMoney/pages/TymRegistration';
import TymLoginPage from './TrackYourMoney/pages/TymLoginPage';
import TymProfile from './TrackYourMoney/pages/TymProfile';
import TymInsights from './TrackYourMoney/pages/TymInsights';
import TymSettings from './TrackYourMoney/pages/TymSettings';
import TymAddExpensesPage from './TrackYourMoney/pages/TymAddExpensesPage';
import TymAddIncomePage from './TrackYourMoney/pages/TymAddincomePage';
import TymCategories from "./TrackYourMoney/pages/TymCategories";


// ************************ 

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/TymLanding')}>
        Track Your Money
      </button>
      <button onClick={() => navigate('/')}>
        About Page
      </button>

      <Routes>
        <Route path='/TymLanding/*' element={<TymLandingPage />}></Route>
        <Route path='/AboutPages/*' element={<Navbar />}></Route>
        <Route path='/SihamAbout' element={<SihamAbout />} />
        <Route path='/DiegoAbout' element={<DiegoAbout />} />
        <Route path='/HemantAbout' element={<HemantAbout />} />
        <Route path='/NeelAbout' element={<NeelAbout />} />
        <Route path='/RobertAbout' element={<RobertAbout />} />
        <Route path='/tymHome' element={<TymHomePage />}></Route>
        <Route path='/tymIncome' element={<TymIncomePage />}></Route>
        <Route path='/registration' element={<TymRegistration />}></Route>
        <Route path='/tymProfile' element={<TymProfile />}></Route>
        <Route path='/tymInsights' element={<TymInsights />}></Route>
        <Route path='/tymSettings' element={<TymSettings />}></Route>
        <Route path='/AddIncome' element={<TymAddIncomePage />}></Route>
        <Route path='/AddExpense' element={<TymAddExpensesPage />}></Route>
        <Route path="/tymcategories" element={<TymCategories />}></Route>

        <Route path='/login' element={<TymLoginPage />}></Route>

        <Route path='/' element={<Home />}></Route>
      </Routes>


    </>

  );
}


export default App;
