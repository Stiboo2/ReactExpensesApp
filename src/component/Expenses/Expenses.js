import React, { useState } from "react";
import ExpenseIterm from "./ExpenseIterm";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtedYearExpense = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    );
    
  });

  let expenseContent = <p> No Expense found</p>;

  if (filtedYearExpense.length > 0){
    expenseContent = filtedYearExpense.map(({ id, title, amount, date }) => (
      <ExpenseIterm 
      key={id} 
      title={title} 
      amount={amount} 
      date={date} 
      />
    ))

  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};
export default Expenses;
