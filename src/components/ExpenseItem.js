import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div key={props.key} className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} />
        </div>
    )
}
export default ExpenseItem;