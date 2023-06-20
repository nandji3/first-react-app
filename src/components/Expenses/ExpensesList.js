import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h3 className="expenses-list_fallback">No Expenses Found !!!</h3>;
    }
    return <ul className="expenses-list">
        {
            props.items.map((exp, i) => {
                return (<ExpenseItem key={exp.id} title={exp.title} location={exp.location} amount={exp.amount} date={exp.date} />)
            })
        }
    </ul>
}
export default ExpensesList;