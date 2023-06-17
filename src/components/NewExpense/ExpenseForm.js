import React from "react";
import './ExpenseForm.css';
import { useState } from "react";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredLocation, setEnteredLocation] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [expenseTodo, setExpenseTodo] = useState([]);

    const allExpenses = () => {
        var newExpenses = {
            title: enteredTitle,
            location: enteredLocation,
            amount: enteredAmount,
            date: enteredDate,
            status: false,
        };
        setExpenseTodo([...expenseTodo, newExpenses]);
    };

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type="text" onChange={(e) => setEnteredTitle(e.target.value)} placeholder="Enter Expense Title" />
                </div>
                <div className="new-expense__control">
                    <lable>Location</lable>
                    <input type="text" onChange={(e) => setEnteredLocation(e.target.value)} placeholder="Enter Expense Location" />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input type="number" onChange={(e) => setEnteredAmount(e.target.value)} min="0.01" step="0.01" placeholder="Enter Expense Amount" />
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" onChange={(e) => setEnteredDate(e.target.value)} min="2019-01-01" step="2023-06-16" placeholder="Enter Expense Date" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={allExpenses}>Add Expenses</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;