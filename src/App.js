import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  return (
    <Card className="App">
      <NewExpense />
      <Expenses />
    </Card >
  );
}

export default App;
