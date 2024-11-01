import React, { useMemo, useState } from "react";
const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(0);
  useMemo(
    //here usememo  memoisze the function to prevent it  from unnecessary rendering it will render in first run paint and then when its dependency changes it will again paint itlself
    function CallAdd() {
      console.log("Add  has been called");
    },
    [add]
  );
  useMemo(
    function CallSubtraction() {
      console.log("Subtraction has been called");
    },
    [subtract]
  );
  return (
    <div>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <h1>{add}</h1>
      <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
      <h1>{subtract}</h1>
    </div>
  );
};

export default UseMemo;
