import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [subtract, setsubtract] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      alert(`Add has been called`);
    }, 2000);
  }, [count]);
  useEffect(() => {
    alert(`substract has been called`);
  }, [subtract]);
  return (
    <>
      <p>learning useEffect</p>
      <p>{count}</p>
      <p>{subtract}</p>
      <button onClick={() => setCount(count + 1)}>click addd button</button>
      <button onClick={() => setsubtract(subtract - 1)}>
        click subtract button
      </button>
    </>
  );
};

export default UseEffect;
