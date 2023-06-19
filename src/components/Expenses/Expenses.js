import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenses.map((exp, i) => {
                return (<ExpenseItem key={exp.id} title={exp.title} location={exp.location} amount={exp.amount} date={exp.date} />)
            })}
        </Card >
    );
}

export default Expenses;