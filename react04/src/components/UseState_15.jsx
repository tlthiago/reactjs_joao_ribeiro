import { useState } from "react";

export default function HookState15() {

  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log("Component rendered");

  return (
    <>
      <h4>useState - Exercício 12</h4>

      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}