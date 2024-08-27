import React, { useState } from "react";
import { useRef } from "react";
const UseRef = () => {
  const [value, setValue] = useState(0);
  let inputOneContext = useRef();
  let inputTwoContext = useRef();
  const handleButton = () => {
    let sum = Number(inputOneContext.current.value) + Number(inputTwoContext.current.value)
    setValue(sum)
    inputOneContext.current.value = "";
    inputTwoContext.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputOneContext} />
      <input type="text" ref={inputTwoContext} />
      <button onClick={() => handleButton()}>Add</button>
      <p>{value}</p>
    </div>
  );
};
export default UseRef;
