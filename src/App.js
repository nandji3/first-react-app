import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expense = [
    { id: 'e', LocationOfExpenditure: 'Car Insurance ', amount: 264.5, date: new Date(2023, 2, 27) },
    { id: 'e', LocationOfExpenditure: 'Food ', amount: 950, date: new Date(2023, 2, 27) },
    { id: 'e', LocationOfExpenditure: 'Travel ', amount: 675, date: new Date(2023, 2, 27) },
  ];

  return (
    <div className="App">
      {expense.map((exp, i) => {
        return (<ExpenseItem key={i} title={exp.LocationOfExpenditure} amount={exp.amount} date={exp.date} />)
      })}
    </div >
  );
}

export default App;
