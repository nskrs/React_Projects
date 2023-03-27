import React, { useState } from 'react';
import './Counter.css';
function Fruits() {
    const[fruit,setFruit]=useState('Apple');
    const[inputText, setInputText]=useState('');

    const updateFruit=()=>{
        setFruit(inputText);
    }

    function updateInputText(event){
      const curInputValue= event.target.value;
      setInputText(curInputValue);
    }

    
  return (
    <>
    <h1>
      <p>The value of Fruit is {fruit}</p>
      {/* <input type="text"onChange={(event)=>setInputText(event.target.value)} ></input>  OR */}
      <input type="text"onChange={updateInputText}></input>
      {/* <button  onClick={()=> setFruit('Papays')}>Papaya</button><br></br>
      <button  onClick={()=> setFruit('Mango')}>Mango</button><br></br> */}
      <button  onClick={()=> updateFruit()}>Submit</button><br></br>
      </h1>
    </>
  );
}

export default Fruits;

