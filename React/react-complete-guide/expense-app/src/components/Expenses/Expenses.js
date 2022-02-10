import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  //console.log(expenses);
  const [filteredYear, setFilteredYear] = useState('2020')
  //const [expensesList, setExpensesList] = useState(expenses)

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(exp => exp.date.getFullYear().toString() === filteredYear)
  
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selectedFilterYear={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
