
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseDetails.css';


 

const ExpenseDetails = (props) =>{
  
  let [amount, setAmount] = useState(props.amount)

  let amountHandler = () => {
    setAmount("100$")
    console.log(amount)
  }

  let  [title, setTitle] = useState(props.title)

  let  clickHandler = () => {
    setTitle('updated!')
    console.log(title);
  }

  const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
  
  
  const clickHandler=()=>{
    setTitle('Updated!');
    console.log(title);
};

const changeAmount= () => {
  setAmount(100);
  console.log(amount);
};


const deleteExpense=()=>{
   alert("are you sure")
     }
  return(
  <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    < ExpenseDate date ={props.date}/>
      <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>Rs.{amount}</div>
      </div>
       <button onClick={clickHandler}> Change Title</button>
       <button onClick={changeAmount}>Change Amount</button>
      <button onClick={deleteExpense} > Delete Expense</button>   
  </Card>
  );
}
}

export default ExpenseDetails;

