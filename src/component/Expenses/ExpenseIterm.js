import React from "react";
import "./ExpenseIterm.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseIterm=(props)=> {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>;
      </div>
    </Card>
  );
}

export default ExpenseIterm;

