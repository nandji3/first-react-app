import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    //console.log(filteredYear);

    const filteredExpenses = expenses.filter((expense) => {
        return (expense.date.getFullYear().toString() === filteredYear);
    })

    let style = { color: "Red", marginLeft: "15px", backgroundColor: "white", border: "2px solid yellow", width: "21%" }

    let expensesContent = <h4 style={style}>No Expenses Found</h4>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((exp, i) => {
            return (<ExpenseItem key={exp.id} title={exp.title} location={exp.location} amount={exp.amount} date={exp.date} />)
        })
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card >
        </div>
    );
}

export default Expenses;