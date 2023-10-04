import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleAmount } from '../helper_files/helper'
import '.././css/ExpenseIncome.css'

function AddIncomeComponent() {
    const [incomeDate, setDate] = useState(new Date());
    const [typeValue, setTypeValue] = useState('')
    const [amount, setAmount] = useState('')


    const addIncome = () => {
        fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {

                    var day = (new Date(incomeDate)).getUTCDate();
                    var month = (new Date(incomeDate)).getUTCMonth();
                    var year = (new Date(incomeDate)).getUTCFullYear();
                    var email = data.email.email;

                    var incomeDetails = JSON.stringify({
                        email: email,
                        day: day,
                        month: month,
                        year: year,
                        amount: amount,
                        type: typeValue,
                    })

                    console.log(incomeDetails);


                    return Promise.resolve(incomeDetails);
                }
            ).then(
                incomeDetails => {

                    const settings = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: incomeDetails,
                    }

                    console.log(settings);

                    fetch("https://csc.csc648team06.com/api/transaction/incomeInsert", settings)
                    // fetch("/api/transaction/incomeInsert", settings)
                        .then(response => {
                            console.log(response)
                            // setDate('');
                            // setTypeValue('');
                            // setAmount('');
                        })
                        .catch(console.log)
                }
            )
    }

    return (
        <>
            <section className="income-trasaction trasaction-details">
                <p>Trasaction details</p>
                <div className="trasaction-form" action="" method="">
                    <div className="form-group">
                        <label htmlFor='date'>Date:</label>
                        <input className="form-control" id="date" name="date" type="date" placeholder='Date' 
                        onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='type'>Type:</label>
                        <input className="form-control" id="type" name="type" type="text" value={typeValue} onChange={e => setTypeValue(e.target.value)} placeholder='Cash' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='amount'>Amount:</label>
                        <span>$<input className="form-control" id="amount" name="amount" value={amount} onKeyDown={e => setAmount(handleAmount(e))} type="text" placeholder='5.00' /></span>
                    </div>
                    <div className='form-group'>
                        <button className="submit-btn" type="submit" onClick={addIncome}>Record</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddIncomeComponent