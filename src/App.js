import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = () => {

  const [expense, setExpense] = useState([])

  const addExpenseHandler = (expense) => {
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
