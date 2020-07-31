import React from 'react';

const Counter = ({ count, clicks, input, onDecrement, onIncrement, onInputNumber, onChangeCount }) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <h3>Times the increment/decrement buttons have been clicked: {clicks}</h3>
      
      <input onChange={event => onChangeCount(event.target.value)} value={input}/>
      <button onClick={onInputNumber} >Change Count Number</button>
    </div>
  );
}


export default Counter;