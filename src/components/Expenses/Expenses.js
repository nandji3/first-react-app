import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {

    return (
        <Card>
            {expenses.map((exp, i) => {
                console.log(i)
                return (<ExpenseItem key={exp.id} title={exp.title} LocationOfExpenditure={exp.LocationOfExpenditure} amount={exp.amount} date={exp.date} />)
            })}
        </Card >
    );
}

export default Expenses;