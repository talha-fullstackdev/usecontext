import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state > 0 ? state - 1 : initialState;
  }
  if (action.type === "MULTIPLY") {
    return state > 0 ? state * 5 : state + 1 * 5;
  }
  if (action.type === "Reset") {
    return (state = 0);
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>multiply</button>
      <button onClick={() => dispatch({ type: "Reset" })}>reset</button>
    </div>
  );
};
export default UseReducer;
