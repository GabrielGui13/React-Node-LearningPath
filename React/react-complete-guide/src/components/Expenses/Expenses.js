import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  console.log(expenses);

  return (
    <Card className="expenses">
      {expenses.map((data) => {
        return <ExpenseItem {...data}></ExpenseItem>;
      })}
    </Card>
  );
}

export default Expenses;
