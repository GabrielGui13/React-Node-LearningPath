import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  //console.log(expenses);
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selectedFilterYear={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((data) => {
          return <ExpenseItem {...data}></ExpenseItem>;
        })}
      </Card>
    </>
  );
}

export default Expenses;
