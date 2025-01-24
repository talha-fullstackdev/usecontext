// import React, { createContext, useState } from "react";
// import ComB from "./ComB";
// import ComC from "./ComC";
// const myContext = createContext();
// const ComA = () => {
//   const [num, setNum] = useState(0);
//   const handleInc = () => {
//     setNum(num + 1);
//   };
//   const handleDec = () => {
//     num > 0 ? setNum(num - 1) : null;
//   };
//   const myDetails = {
//     name: "Talha Nawaz",
//     age: 24,
//     profession: "Software engineer",
//     gender: "male",
//   };
//   const properties = {
//     myDetails,
//     handleInc,
//     handleDec,
//     num,
//   };
//   return (
//     <div>
//       <myContext.Provider value={properties}>
//         <ComB />
//         <ComC />
//       </myContext.Provider>
//     </div>
//   );
// };
// export default ComA;
// export { myContext };
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import ComB from "./ComB.jsx";
import ComC from "./ComC.jsx";
const myContext = createContext();
const ComA = () => {
  
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    count > 0 ? setCount(count - 1) : count;
  };
  const myDetails = {
    name: "Talha Nawaz",
    age: 24,
    gender: "male",
  };
  const data = {
    count,
    setCount,
    handleInc,
    handleDec,
    myDetails
  }
  return (
    <div>
      <myContext.Provider value={data}>
        <ComB />
        <ComC />
      </myContext.Provider>
    </div>
  );
};
export {myContext}
export default ComA;

