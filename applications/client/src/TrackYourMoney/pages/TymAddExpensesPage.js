import React from 'react'
import { useNavigate } from 'react-router-dom'
import settings from '../../icons/settings.svg'

import OverviewComponent from '../components/OverviewComponent';
import SideBarComponent from '../components/SideBarComponent'
import DateComponent from '../components/DateComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import { RouteBlocker } from '../helper_files/RouteBlocker';

import '.././css/tymHome.css'


function TymAddExpensesPage() {
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
                <div className="expenses-btn">
                    <button onClick={() => navigate('/tymHome')}>Expenses</button>
                </div>

                <div className="income-btn">
                    <button onClick={() => navigate('/tymIncome')}>Income</button>
                </div>

                <div className="settings">
                    <img src={settings} onClick={() => navigate('/tymcategories')} alt="" />
                </div>
            </section>

            <AddExpenseComponent />

        </div>
    )
}

export default TymAddExpensesPage