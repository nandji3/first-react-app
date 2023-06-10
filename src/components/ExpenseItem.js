import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from './Card'

function ExpenseItem(props) {

    return (
        <Card key={props.key} className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount} />
        </Card>
    )
}
export default ExpenseItem;