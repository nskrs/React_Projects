import React, { useState } from 'react';
import './Counter.css';


function Counter() {
  let [count,setCount] =useState(0);
  
  function updateCount(){
   setCount(count+1)  ;
    console.log('count is',count);
  }

  return (
   
    <>
  <h1>
      <p> The value of count is: {count}; </p>
     <button onClick={updateCount}>  <h1>Increment</h1> </button>
     </h1> 
    </>
  )
}

export default Counter
