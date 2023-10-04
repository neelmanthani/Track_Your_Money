import { useState, useEffect } from "react"

async function AreaChartHelper() {

    var income_array = new Array(12);
    income_array.fill(0);
    var expense_array = new Array(12);
    expense_array.fill(0);
    // let income = await fetch('/api/transaction/insightsIncomeList?year=2022&hyperparam=1');
    let income = await fetch('https://csc.csc648team06.com/api/transaction/insightsIncomeList?year=2022&hyperparam=1');

    let incomeData = await income.json();

    let expense = await fetch('https://csc.csc648team06.com/api/transaction/insightsExpenseList?year=2022&hyperparam=1');
    // let expense = await fetch('/api/transaction/insightsExpenseList?year=2022&hyperparam=1');

    let expenseData = await expense.json();


    for (const idx in incomeData) {
        income_array[incomeData[idx].date.month - 1] = parseInt(incomeData[idx].amount);
    }
    for (const idx in expenseData) {
        expense_array[expenseData[idx].date.month - 1] = parseInt(expenseData[idx].amount);
    }



    let rechartsArray = [];

    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let i = 0; i < 12; i++) {
        let obj = {
            name: month[i],
            Expense: expense_array[i],
            Income: income_array[i]
        }
        rechartsArray.push(obj)
    }

    return rechartsArray;
}


async function CategoryChart() {

    // let expense = await fetch('/api/transaction/insightsExpenseList?year=2022&hyperparam=1');
    let expense = await fetch('https://csc.csc648team06.com/api/transaction/insightsExpenseList?year=2022&hyperparam=1');

    let expenseData = await expense.json();

    let category_obj = {};
    for (let property in expenseData) {
        if (!isNaN(expenseData[property].amount)) {
            if(category_obj[expenseData[property].category] === undefined){
                category_obj[expenseData[property].category] = 0.0;
            }
            category_obj[expenseData[property].category] += parseFloat(expenseData[property].amount);
        }
    }

    let returnArray = []
    for (let property in category_obj) {
        let obj = {
            category: property,
            amount: category_obj[property]
        }
        returnArray.push(obj);
    }
    return returnArray;
}



export { AreaChartHelper, CategoryChart };