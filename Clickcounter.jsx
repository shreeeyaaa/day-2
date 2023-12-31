import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const increment = () => {
    setCount(count + 1);
    setButtonClicked(true);

  };

  const decrement = () => {
    // setCount(count - 2);
    setButtonClicked(true);
    {count>1 ? setCount(count - 2):setCount(0)}

  };

  return (
    <div>
      <h2>{props.title}</h2>


      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>


    </div>
  );
};

export default Counter;