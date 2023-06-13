import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = () => {

    const expense = [
        { id: 'e1', title: 'Car Insurance ', LocationOfExpenditure: 'Bhopal', amount: 264.5, date: new Date(2023, 7, 27) },
        { id: 'e2', title: 'Food ', LocationOfExpenditure: 'Indore', amount: 950, date: new Date(2023, 2, 27) },
        { id: 'e3', title: 'Travel ', LocationOfExpenditure: 'Gwalior', amount: 675, date: new Date(2023, 5, 27) },
        { id: 'e4', title: 'Fuel ', LocationOfExpenditure: 'Satna', amount: 400, date: new Date(2023, 6, 15) },
    ];

    return (
        <Card>
            {expense.map((exp, i) => {
                console.log(i)
                return (<ExpenseItem key={exp.id} title={exp.title} LocationOfExpenditure={exp.LocationOfExpenditure} amount={exp.amount} date={exp.date} />)
            })}
        </Card >
    );
}

export default Expenses;