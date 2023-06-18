import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {

  // const expense = [
  //   { id: 'e1', title: 'Car Insurance ', LocationOfExpenditure: 'Bhopal', amount: 264.5, date: new Date(2023, 7, 27) },
  //   { id: 'e2', title: 'Food ', LocationOfExpenditure: 'Indore', amount: 950, date: new Date(2023, 2, 27) },
  //   { id: 'e3', title: 'Travel ', LocationOfExpenditure: 'Gwalior', amount: 675, date: new Date(2023, 5, 27) },
  //   { id: 'e4', title: 'Fuel ', LocationOfExpenditure: 'Satna', amount: 400, date: new Date(2023, 6, 15) },
  // ];
  const [expense, setExpense] = useState([])

  const addExpenseHandler = (expense) => {
    console.log(expense);

    setExpense((prev) => [...prev, expense]);
  }

  return (
    <Card className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </Card >
  );
}

export default App;
