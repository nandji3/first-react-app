import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';

const App = () => {
  const expense = [
    { id: 'e1', title: 'Car Insurance ', LocationOfExpenditure: 'Bhopal', amount: 264.5, date: new Date(2023, 7, 27) },
    { id: 'e2', title: 'Food ', LocationOfExpenditure: 'Indore', amount: 950, date: new Date(2023, 2, 27) },
    { id: 'e3', title: 'Travel ', LocationOfExpenditure: 'Gwalior', amount: 675, date: new Date(2023, 5, 27) },
  ];

  return (
    <Card className="App">
      {expense.map((exp, i) => {
        return (<ExpenseItem key={i} title={exp.title} LocationOfExpenditure={exp.LocationOfExpenditure} amount={exp.amount} date={exp.date} />)
      })}
    </Card >
  );
}

export default App;
