import { useState, useRef } from 'react'
import { handleAmount, changeArrowDirection } from '../helper_files/helper'
import arrow_head from '../../icons/arrow_head.svg'
import '.././css/ExpenseIncome.css'

import { categoryoptions } from "../helper_files/categoryOptions"

function AddExpenseComponent() {
    //set up two way binding using state for monthName and monthCounter

    const [expenseDate, setDate] = useState(new Date());
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const [show, setShow] = useState(false)

    const selectedCategoryRef = useRef(null);
    const categoryOptionsRef = useRef(null);

    const handleCategory = (e) => {
        e.preventDefault()
        let downArrow = document.getElementById("down-arrow")
        setShow(!show)
        changeArrowDirection(downArrow, show)
        categoryOptionsRef.current.style.display = "block"
    }

    const handleOptions = (e) => {
        e.preventDefault()
        let downArrow = document.getElementById("down-arrow")
        selectedCategoryRef.current.innerText = e.target.innerText
        setShow(!show)
        changeArrowDirection(downArrow, show)
    }




    const addExpense = () => {
        fetch("https://csc.csc648team06.com/api/user/Get_Session_Data")
        // fetch("/api/user/Get_Session_Data")
            .then(
                response => response.json()
            ).then(
                data => {

                    var email = data.email.email;

                    var day = (new Date(expenseDate)).getUTCDate();
                    var month = (new Date(expenseDate)).getUTCMonth();
                    var year = (new Date(expenseDate)).getUTCFullYear();
                    var category = (selectedCategoryRef.current).outerHTML;

                    category = category.replace(/<\/?span[^>]*>/g, "");
                    
                    var expenseDetails = JSON.stringify({
                        email: email,
                        day: day,
                        month: month,
                        year: year,
                        amount: amount,
                        description: desc,
                        category: category
                    })

                    console.log(expenseDetails);


                    return Promise.resolve(expenseDetails);
                }
            ).then(
                expenseDetails => {

                    const settings = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: expenseDetails,
                    }

                    console.log(settings);
                    fetch("https://csc.csc648team06.com/api/transaction/expenseInsert", settings)
                    //fetch("/api/transaction/expenseInsert", settings)
                        .then(response => {
                            console.log(response)

                        })
                        .catch(console.log)
                }
            )
    }



    return (
        <>
            <section className="expense-trasaction trasaction-details">
                <p>Trasaction details</p>
                <div className="trasaction-form" action="" method="">
                    <div className="form-group">
                        <label htmlFor='date'>Date:</label>
                        <input className="form-control" id="date" name="date" type="date" placeholder='Date'
                            onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="form-group" id="category-form-group">
                        <p>Category:</p>
                        <div class="category">
                            <p id="selected-category" onClick={(e) => handleCategory(e)} >
                                <span ref={selectedCategoryRef}>Food/Drink</span>
                                <img id="down-arrow" src={arrow_head} alt="" width="" height="" />
                            </p>
                            <div class="category-options" ref={categoryOptionsRef} style={{ display: show ? "display" : "none" }} >
                                <ul>
                                    {
                                        categoryoptions.map((option, index) => {
                                            return <li key={index} onClick={(e) => handleOptions(e)}> {option.name} </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor='desc'>Description:</label>
                        <input className="form-control" id="desc" name="desc" type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder='Starbucks' />
                    </div>
                    <div className="form-group">
                        <label htmlFor='amount'>Amount:</label>
                        <span>$<input className="form-control" id="amount" name="amount" value={amount} onKeyDown={e => setAmount(handleAmount(e))} type="text" placeholder='5.00' /></span>
                    </div>
                    <div className='form-group'>
                        <button className="submit-btn" type="submit" onClick={addExpense}>Record</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddExpenseComponent
