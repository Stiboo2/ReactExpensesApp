import React, {useState} from "react";
import "./ExpenseIterm.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseIterm=(props)=> {
  const [title,setState]=useState(props.title)
  const clickhandler =()=>{
    setState("Clicked")
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R{props.amount}</div>;
      </div>
      <button onClick={clickhandler} >Change Title</button>
    </Card>
  );
}

export default ExpenseIterm;

