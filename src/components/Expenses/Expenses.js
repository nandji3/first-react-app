import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


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


    return (
        <li>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card >
        </li>
    );
}

export default Expenses;