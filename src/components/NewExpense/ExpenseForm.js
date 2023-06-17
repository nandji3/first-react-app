import React from "react";
import './ExpenseForm.css';
import { useState } from "react";

const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({ enterdTitle: "", enterdLocation: "", enterdAmount: "", enterdDate: "" })

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input type="text" onChange={(e) => setUserInput({ ...userInput, enterdTitle: e.target.value })} placeholder="Enter Expense Title" />
                </div>
                <div className="new-expense__control">
                    <lable>Location</lable>
                    <input type="text" onChange={(e) => setUserInput({ ...userInput, enterdLocation: e.target.value })} placeholder="Enter Expense Location" />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input type="number" onChange={(e) => setUserInput({ ...userInput, enterdAmount: e.target.value })} min="0.01" step="0.01" placeholder="Enter Expense Amount" />
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" onChange={(e) => setUserInput({ ...userInput, enterdDate: e.target.value })} min="2019-01-01" step="2023-06-16" placeholder="Enter Expense Date" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expenses</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;