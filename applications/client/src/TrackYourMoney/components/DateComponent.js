import { React, useState } from 'react'
import front_arrow from '../../icons/front-arrow.svg'
import back_arrow from '../../icons/back_arrow.svg'




function DateComponent({
    currentDate,
    monthName,
    monthCounter,
    updateMonth,
    setMonthCount
}) {

    


    const getPreviousMonth = () => {
        //decrease monthCounter by 1 to get the previousMonth
        setMonthCount((monthCounter -= 1)); 

        currentDate.setMonth(monthCounter);
        //get monthName in the format required
        updateMonth(currentDate.toLocaleString("default", { month: "long", year: 'numeric' }));
    }

    const getNextMonth = () => {
        //increase monthCounter by 1 to get the nextMonth
        setMonthCount((monthCounter += 1));
        currentDate.setMonth(monthCounter);
        //get monthName in the format required
        monthName = currentDate.toLocaleString("default", { month: "long", year: 'numeric' })
        updateMonth(monthName);
    }
    return (
        <section className='navbar'>
            <div className="month">
                <div className='left-arrow'>
                    <img src={back_arrow} onClick={getPreviousMonth} alt="" />
                </div>
                <div className='current-month'>
                    <h3>{monthName}</h3>
                </div>
                <div className='right-arrow'>
                    <img src={front_arrow} onClick={getNextMonth} alt="" />
                </div>
            </div>
        </section>

    )
}

export default DateComponent;