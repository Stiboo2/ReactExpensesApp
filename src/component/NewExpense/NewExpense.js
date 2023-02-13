import React, { useState } from "react";
import Expenseform from "./Expenseform";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
    setIsButtonClicked(false);
  };
  const addButtonHandler = () => {
    setIsButtonClicked(true);
  };
  const cancelButtonHandler = () => {
    console.log("cancelButtonHandler");
    setIsButtonClicked(false);
  };

  return (
    <div className="new-expense">
      {!isButtonClicked && (
        <button onClick={addButtonHandler}> Veiw Add Expense Form</button>
      )}
      {isButtonClicked && (
        <Expenseform
          onSaveExpenseData={saveExpenseDatahandler}
          onCancelClicked={cancelButtonHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
