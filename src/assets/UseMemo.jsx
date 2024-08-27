import React, { useMemo, useState } from "react";
const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [subtract, setSubtract] = useState(0);
  const multiply = useMemo(
    function multiplication() {
      console.log("Add  has been called");
      return add * 10;
    },
    [add]
  );
  const minus = useMemo(
    function subtraction() {
      console.log("Subtraction has been called");
      return subtract * 10;
    },
    [subtract]
  );
  return (
    <div>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <h1>{add}</h1>
      <button onClick={() => setSubtract(subtract - 1)}>Subtract</button>
      <h1>{subtract}</h1>
      {multiply}
      {minus}
    </div>
  );
};

export default UseMemo;
