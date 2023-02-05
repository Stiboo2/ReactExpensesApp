import React from "react";
import ExpensesData from "./component/Expenses/ExpensesData";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses items={ExpensesData} />
    </div>
  );
}

export default App;



