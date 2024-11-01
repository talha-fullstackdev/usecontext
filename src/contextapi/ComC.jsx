import React from "react";
import { useContext } from "react";
import { myContext } from "./ComA";
const ComC = () => {
  const { num, handleInc, handleDec } = useContext(myContext);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => handleInc()}>inc</button>
      <button onClick={() => handleDec()}>dec</button>
    </div>
  );
};
export default ComC;
