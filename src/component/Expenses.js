import ExpenseIterm from "./ExpenseIterm";
import './Expenses.css'
const Expenses = props => {
    return (
      <div className="expenses">
  
        {props.items.map(({ id, title, amount, date }) => (
          <ExpenseIterm title={title} amount={amount} date={date} />
        ))}
      </div>
    );
};
export default Expenses;
