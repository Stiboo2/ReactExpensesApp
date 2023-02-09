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

  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(({ id, title, amount, date }) => (
        <ExpenseIterm title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};
export default Expenses;
