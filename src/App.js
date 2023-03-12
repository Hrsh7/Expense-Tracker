import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100.34,
    date: new Date(2021, 2, 1),
  },
  {
    id: "e2",
    title: "Paper",
    amount: 100.34,
    date: new Date(2020, 2, 1),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 100.34,
    date: new Date(2022, 2, 1),
  },
];
const App = ()=> {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1'), {}, "Let's get started!"),
  //   React.createElement(Expenses, {expenses : expenses})
  // );
  const addExpenseHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
