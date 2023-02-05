import React from "react";
import ExpensesData from "./component/Expenses/ExpensesData";
import Expenses from "./component/Expenses/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={ExpensesData} />
    </div>
  );
}

export default App;



