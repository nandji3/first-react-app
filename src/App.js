import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance ', location: 'Bhopal', amount: 264.5, date: new Date(2020, 7, 27) },
  { id: 'e2', title: 'Food ', location: 'Indore', amount: 950, date: new Date(2020, 2, 27) },
  { id: 'e3', title: 'Travel ', location: 'Gwalior', amount: 675, date: new Date(2019, 5, 27) },
  { id: 'e4', title: 'Fuel ', location: 'Satna', amount: 400, date: new Date(2021, 6, 15) },
];

const App = () => {

  // const [expense, setExpense] = useState([])
  const [expense, setExpense] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <Card className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </Card >
  );
}

export default App;
