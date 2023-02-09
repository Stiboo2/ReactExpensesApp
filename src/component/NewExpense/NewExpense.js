import React from "react";
import Expenseform from "./Expenseform";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
};
export default NewExpense;
