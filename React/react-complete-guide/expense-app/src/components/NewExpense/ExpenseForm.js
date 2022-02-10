import React, { useState } from 'react';
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({ //alternative way
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })

    const titleChangeHandler = e => setEnteredTitle(e.target.value)
    const alternativeTitleChangeHandler = e => {
        /* setUserInput({
            ...userInput,
            enteredTitle: e.target.value
        }) */
        setUserInput((prevState) => { //this way react guarantee the state will always be the last previous state, used if the state depends from the previous state
            return {
                ...prevState,
                enteredTitle: e.target.value
            }
        })
    }
    const amountChangeHandler = e => setEnteredAmount(e.target.value)
    const dateChangeHandler = e => setEnteredDate(e.target.value)

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onDisableForm}>Cancel</button>
                <button type="submit" onClick={props.onDisableForm}>Add Expense</button>
            </div>
        </form>
    )    
}