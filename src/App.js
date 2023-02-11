import React ,{useState}from "react";
import ExpensesData from "./component/Expenses/ExpensesData";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(ExpensesData);
  const saveNewExpensehandler = (NewExpenseDate) => {
    setExpenses((previsousExpense)=>{
      return[NewExpenseDate, ...previsousExpense];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
