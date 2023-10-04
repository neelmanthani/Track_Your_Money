import React from 'react'
import { useEffect, useState } from 'react';

function OverviewComponent(
    monthName
) {



    // get expense total

    var expenseTotal = 0;

    const [backendData, setBackendData] = useState([{}])

    var email;

    var searchURL = "https://csc.csc648team06.com/api/transaction/expenseList?";
    // var searchURL = "/api/transaction/expenseList?";
    var emailAdded = false;


    var dateAdded = false;

    useEffect(() => {
        fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {
                    email = data.email.email;
                    if (!emailAdded) {
                        searchURL = searchURL + "email=" + email + '&';
                        emailAdded = true;
                    }

                    var tempDate = new Date("1 " + monthName.monthName);

                    var month = tempDate.getUTCMonth();
                    var year = tempDate.getUTCFullYear();

                    if (!dateAdded) {
                        searchURL = searchURL + "month=" + month + "&" + "year=" + year + "&";
                        dateAdded = true;
                    }


                    return Promise.resolve(searchURL);
                }
            ).then(
                searchURL => fetch(searchURL).then(
                    response => response.json()
                )
                    .then(
                        data => {
                            setBackendData(data)
                        }
                    )
            ).catch(setBackendData([{}]))
    }, [monthName])



    const listItems = Object.keys(backendData).map(expense => {
        expenseTotal += parseInt(backendData[expense].amount);
    })

    if (isNaN(expenseTotal))
    {
        expenseTotal = 0;
    }




    // get income total


    const [incomeBackendData, setIncomeBackendData] = useState([{}])


    var incomeTotal = 0;

    var incomeSearchURL = "https://csc.csc648team06.com/api/transaction/incomeList?";
    //var incomeSearchURL = "/api/transaction/incomeList?";
    var incomeEmailAdded = false;


    var incomeDateAdded = false;

    useEffect(() => {
        fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {
                    email = data.email.email;
                    if (!incomeEmailAdded) {
                        incomeSearchURL = incomeSearchURL + "email=" + email + '&';
                        emailAdded = true;
                    }

                    var tempDate = new Date("1 " + monthName.monthName);

                    var month = tempDate.getUTCMonth();
                    var year = tempDate.getUTCFullYear();

                    if (!incomeDateAdded) {
                        incomeSearchURL = incomeSearchURL + "month=" + month + "&" + "year=" + year + "&";
                        dateAdded = true;
                    }


                    return Promise.resolve(incomeSearchURL);
                }
            ).then(
                incomeSearchURL => fetch(incomeSearchURL).then(
                    response => response.json()
                )
                    .then(
                        data => {
                            setIncomeBackendData(data)
                        }
                    )
            ).catch(setIncomeBackendData([{}]))
    }, [monthName])



    const incomeListItems = Object.keys(incomeBackendData).map(income => {
        incomeTotal += parseInt(incomeBackendData[income].amount);
    })

    if (isNaN(incomeTotal))
    {
        incomeTotal = 0;
    }

    //calculate savings

    var savings = incomeTotal - expenseTotal;

    return (
        <div>
            <section className="overview-card">
                <div className="savings">
                    <h3>Savings</h3>
                    <h2>${savings}</h2>
                </div>

                <div className="income-expenses">
                    <div className="income">
                        <h4>Income</h4>
                        <h3>${incomeTotal}</h3>
                    </div>
                    <div className="divider">
                        <p>|</p>
                    </div>

                    <div className="expenses">
                        <h4>expenses</h4>
                        <h3>${expenseTotal}</h3>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default OverviewComponent
