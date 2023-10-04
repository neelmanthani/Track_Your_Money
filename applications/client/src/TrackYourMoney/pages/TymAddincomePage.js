import React from 'react'
import { useNavigate } from 'react-router-dom';

import OverviewComponent from '../components/OverviewComponent';
import AddIncomeComponent from '../components/AddIncomeComponent';
import settings from '../../icons/settings.svg'
import SideBarComponent from '../components/SideBarComponent'
import DateComponent from '../components/DateComponent';
import { RouteBlocker } from '../helper_files/RouteBlocker';


import '.././css/tymHome.css'


function TymAddIncomePage() {
    const navigate = useNavigate();
    RouteBlocker();

    return (
        <div className='main-container-home'>
            <section className='navbar'>
                <div><SideBarComponent /></div>
                <div className="month">
                    <div><DateComponent /></div>
                </div>

            </section>

            <section>
                <OverviewComponent />
            </section>

            <section className="income-expense-btn">
                <div className="expenses-button">
                    <button onClick={() => navigate('/tymHome')}>Expenses</button>
                </div>

                <div className="income-button">
                    <button onClick={() => navigate('/tymIncome')}>Income</button>
                </div>

                <div className="settings">
                    <img src={settings} onClick={() => navigate('/tymcategories')} alt="" />
                </div>
            </section>

            <AddIncomeComponent />
        </div>
    )
}

export default TymAddIncomePage