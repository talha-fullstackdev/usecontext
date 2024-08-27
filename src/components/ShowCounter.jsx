import React, { useEffect, useMemo, useState } from "react";
import { increment, decrement, reset } from "../slices/counterslice";
import { useSelector, useDispatch } from "react-redux";
const ShowCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterslice.value);
  const name = useSelector((state) => state.nameslice.name);
  console.log(name);
  
  //  useEffect(()=>{
  //    console.log(name);

  //  },[count])
//   const show = useMemo(
//     function showName() {
//       console.log(name);
//     },
//     [count]
//   );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default ShowCounter;
