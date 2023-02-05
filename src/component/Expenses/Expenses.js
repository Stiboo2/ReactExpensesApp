import ExpenseIterm from "./ExpenseIterm";
import './Expenses.css'
import Card from '../UI/Card';
const Expenses = props => {
    return (
      <Card className="expenses">
  
        {props.items.map(({ id, title, amount, date }) => (
          <ExpenseIterm title={title} amount={amount} date={date} />
        ))}
      </Card>
    );
};
export default Expenses;
