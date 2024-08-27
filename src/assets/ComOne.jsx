import React, { useState } from "react";
import { createContext } from "react";
import ComTwo from "./ComTwo";
const methodsContext = createContext();
const ComOne = () => {
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
    profession: "Software enginner",
    city: "Abbottabad",
    gender: "Male",
  };
  const methods = {
    myDetails,
    handleInc,
    handleDec,
    num,
  };
  return (
    <div>
      <methodsContext.Provider value={methods}>
        <ComTwo />
      </methodsContext.Provider>
    </div>
  );
};
export default ComOne;
export { methodsContext };
