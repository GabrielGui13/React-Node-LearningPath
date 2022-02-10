import React, { useState } from 'react';
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    const handleEnableForm = () => setFormActive(true) 
    const handleDisableForm = () => setFormActive(false) 

    return (
        <div className="new-expense">
            {!formActive && <button type="submit" onClick={handleEnableForm}>Add New Expense</button>}
            {formActive && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onDisableForm={handleDisableForm} /> }
        </div>
    )
}

export default NewExpense;