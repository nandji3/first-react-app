import './ExpenseDetails.css';
// import Card from './Card';

function ExpenseDetails(props) {
    return (
        <div className="expense-item__description">
            <h2 className='expense-item__h2'>{props.title}</h2>
            <h2 className='expense-item__h2'>{props.LocationOfExpenditure}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    )
}
export default ExpenseDetails;