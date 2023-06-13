import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
    const style = {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "red",
        border: "1px solid white",
        padding: "0.5rem",
        borderRadius: "8px",
        margin: "20px"
    }

    return (
        <Card key={props.key} className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount} />
            <button onClick={(e) => e.target.parentElement.remove()} style={style}>Delete</button>
        </Card >
    )
}
export default ExpenseItem;

