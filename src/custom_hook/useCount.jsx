import { useState } from "react";
const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 ? setCount(count - 1) : count;
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
};
export default useCount;
