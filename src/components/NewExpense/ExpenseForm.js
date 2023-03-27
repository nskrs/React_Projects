import React, { useState } from 'react';
import './NewExpenseForm.css'

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="form-control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={date} />
      </div>
      <div className="form-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
