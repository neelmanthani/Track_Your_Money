import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBarComponent from '../components/SideBarComponent';
import IncomesComponent from '../components/IncomesComponent';
import DateComponent from '../components/DateComponent';


import settings from '../../icons/settings.svg'
import OverviewComponent from '../components/OverviewComponent';
import { RouteBlocker } from '../helper_files/RouteBlocker';

import '.././css/tymHome.css'

function TymIncomePage() {


    const currentDate = new Date();
    //set up two way binding using state for monthName and monthCounter
    let [monthName, updateMonth] = useState(currentDate.toLocaleString("default", { month: "long", year: 'numeric', }));
    let [monthCounter, setMonthCount] = useState(currentDate.getMonth());

    const navigate = useNavigate();
    RouteBlocker();
    return (
        <div className='main-container-home'>
            <section className='navbar'>
                <div><SideBarComponent /></div>
                <div className="month">
                    <div><DateComponent
                        currentDate={currentDate}
                        monthName={monthName}
                        monthCounter={monthCounter}
                        updateMonth={(month) => updateMonth(month)}
                        setMonthCount={(count) => setMonthCount(count)} />
                    </div>
                </div>
            </section>


            <section>
                <OverviewComponent 
                monthName={monthName}
                />
            </section>


            <section className="income-expense-btn">
                <div className="expenses-button">
                    <button onClick={() => navigate('/tymHome')}>Expenses</button>
                </div>

                <div className="income-button">
                    <button onClick={() => navigate('/tymIncome')}>Income</button>
                </div>

                <div className="settings">
                    {/* <img src={settings} alt="" /> */}
                </div>

            </section>

            <section className="transactions">
                <div className="transaction-header">
                    <div className="history">
                        Transaction history
                    </div>
                    <div className="add-new">
                        <button onClick={() => navigate('/AddIncome')}>Add new entry</button>
                    </div>

                </div>
            </section>

            <IncomesComponent
                monthName={monthName}
                monthCounter={monthCounter}
            />
        </div>
    )
}

export default TymIncomePage