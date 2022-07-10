import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  { id: "e1", title: 'Car Insurance 1', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: "e2", title: 'Car Insurance 2', amount: 394.67, date: new Date(2021, 3, 28) },
  { id: "e3", title: 'Car Insurance 3', amount: 494.67, date: new Date(2021, 4, 28) },
  { id: "e4", title: 'Car Insurance 4', amount: 594.67, date: new Date(2021, 5, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
