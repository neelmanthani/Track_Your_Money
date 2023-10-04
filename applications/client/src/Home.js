import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';

function Home() {
    const [backendData, setBackendData] = useState([{}])

  
    useEffect(() => {
        fetch("https://csc.csc648team06.com/api/transaction").then(
        // fetch("/api/transaction").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const listItems = backendData.map(expense => {

        return (
            <li>Category:  {expense.category}, Amount: {expense.amount}</li>
        );
    })

    return (
        <div >
            <Navbar />
            <h2> Welcome to Home</h2>
            <div> {listItems} </div>
        </div>
    );
}

export default Home;
