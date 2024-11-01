import React, { createContext, useState } from "react";
import ComB from "./ComB";
import ComC from "./ComC";
const myContext = createContext();
const ComA = () => {
  const [num, setNum] = useState(0);
  const handleInc = () => {
    setNum(num + 1);
  };
  const handleDec = () => {
    num > 0 ? setNum(num - 1) : null;
  };
  const myDetails = {
    name: "Talha Nawaz",
    age: 24,
    profession: "Software engineer",
    gender: "male",
  };
  const properties = {
    myDetails,
    handleInc,
    handleDec,
    num,
  };
  return (
    <div>
      <myContext.Provider value={properties}>
        <ComB />
        <ComC />
      </myContext.Provider>
    </div>
  );
};
export default ComA;
export { myContext };
