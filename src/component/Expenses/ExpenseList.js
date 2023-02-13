import React from "react";
import ExpenseIterm from "./ExpenseIterm";
import "./ExpenseList.css";

const ExpenseList = (props) => {
if (props.expenses.length === 0) {
return <h2 className="expense-list__fallback">No Expenses found</h2>;
}

const expenseContent = props.expenses.map(({ id, title, amount, date }) => (
<ExpenseIterm
   key={id}
   title={title}
   amount={amount}
   date={date}
 />
));

return (
<ul className="expense-list">
{expenseContent}
</ul>
);
};

export default ExpenseList;