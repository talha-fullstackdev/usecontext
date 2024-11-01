import React, { useContext } from "react";
import { methodsContext } from "./ComOne";
const Counter = () => {
  const { num, handleInc, handleDec } = useContext(methodsContext);
  return (
    <div className="counter">
      <h1>{num}</h1>
      <button onClick={handleInc}>inc</button>
      <button onClick={handleDec}>dec</button>
    </div>
  );
};
export default Counter;
