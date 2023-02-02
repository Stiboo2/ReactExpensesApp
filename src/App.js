import React from "react";
import ExpensesData from "./component/ExpensesData";
import Expenses from "./component/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={ExpensesData} />
    </div>
  );
}

export default App;



