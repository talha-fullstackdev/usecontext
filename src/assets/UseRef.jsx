import React, { useState } from "react";
import { useRef } from "react";
const UseRef = () => {
  const [value, setValue] = useState(0);
  let inputOneRef = useRef();
  let inputTwoRef = useRef();
  const handleButton = () => {
    let sum = Number(inputOneRef.current.value) + Number(inputTwoRef.current.value);
    setValue(sum);
    inputOneRef.current.value = "";
    inputTwoRef.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputOneRef} placeholder="enter number one"  />
      <input type="text" ref={inputTwoRef} placeholder="enter number two"  />
      <button onClick={() => handleButton()}>Add</button>
      <p>{value}</p>
    </div>
  );
};
export default UseRef;
