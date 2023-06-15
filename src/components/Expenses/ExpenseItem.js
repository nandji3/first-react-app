import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)
    const [expense, setExpense] = useState(props.amount)

    const style = {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "red",
        border: "1px solid white",
        padding: "0.5rem",
        borderRadius: "8px",
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft: "20px"
    }

    const changeTitle = () => {
        setTitle("Title Updated");
        console.log(title);
    }

    const changeExpense = () => {
        setExpense("100");
    }

    return (
        <Card key={props.key} className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} LocationOfExpenditure={props.LocationOfExpenditure} amount={expense} />
            <button onClick={changeExpense} style={{ ...style, backgroundColor: "#1793bd" }}>Change Expense</button>
            <button onClick={(e) => e.target.parentElement.remove()} style={style}>Delete</button>
            <button onClick={changeTitle} style={{ ...style, backgroundColor: "#1793bd" }}>Change Title</button>
        </Card >
    )
}
export default ExpenseItem;

