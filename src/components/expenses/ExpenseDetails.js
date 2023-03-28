import React, { useState } from 'react';
import './Expense'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseDetails.css';






const ExpenseDetails = (props) =>{
  const [title, setTitle]=useState(props.title);
  const[amount,setAmount]=useState(props.amount);
  


  const clickHandler=()=>{
    console.log('clicked!!')

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
    < ExpenseDate date ={props.date}/>
      <div className='expense-item__description'>
      {/* <h2>{props.title}</h2> */}
      {/* <div className='expense-item__price'>Rs.{props.amount}</div> */}
      <h2>{title}</h2>
      <div className='expense-item__price'><h2>Rs.{amount}</h2></div>
      </div>
       <button onClick={clickHandler}> Change Title</button>
       <button onClick={changeAmount}>Change Amount</button>
      <button onClick={deleteExpense} > Delete Expense</button>   
  </Card>
  );
}
export default ExpenseDetails;