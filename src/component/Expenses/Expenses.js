import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
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

 
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expenses={filtedYearExpense}/>
    </Card>
  );
};
export default Expenses;
