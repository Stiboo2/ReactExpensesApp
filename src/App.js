import React from "react";
import ExpensesData from "./component/Expenses/ExpensesData";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const saveNewExpensehandler = (NewExpenseDate) => {
    console.log(NewExpenseDate);
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpensehandler} />
      <Expenses items={ExpensesData} />
    </div>
  );
}

export default App;
