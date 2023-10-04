import React from 'react'
import { useEffect, useState } from 'react';
import down_arrow from '../../icons/down_Arrow.svg'


function IncomesComponent(
    monthName,
    monthCounter
) {

  const [backendData, setBackendData] = useState([{}])

  var email;

  var searchURL = "https://csc.csc648team06.com/api/transaction/incomeList?";
  // var searchURL = "/api/transaction/incomeList?";

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

                if(!dateAdded) {
                    searchURL = searchURL + "month=" + month + "&" + "year=" + year + "&";
                    dateAdded = true;
                }
                console.log("searchURL: " + searchURL);

                return Promise.resolve(searchURL);
            }
        ).then(
            searchURL => fetch(searchURL).then(
                response => response.json()
            )
                .then(
                    data => {
                        setBackendData(data)
                        console.log("this is the income data: " + JSON.stringify(data));
                    }
                )
        ).catch(setBackendData([{}]))
    }, [monthName])


    const listItems = Object.keys(backendData).map(income => {

        return (

            <div className="one">
                <img src={down_arrow} alt="" />
                <h3>{backendData[income].type}</h3>
                <h3 className='amount'>+{backendData[income].amount}</h3>
            </div>
        );
    })
    
  return (
    <section className='transactions'>
      <div className="transaction-list">
        {listItems}
      </div>
    </section>
  )
}

export default IncomesComponent
