import React from "react";
import ComB from "./ComB";
import { createContext } from "react";
// ***** Data to Pass to Component C *****
const name = "Talha Nawaz"
const handleButton = () => {
  alert("Succesful");
};
const nameList = ["Talha", "hamza", "Zarar"];
// context of data
const myName = createContext();
const btnContext = createContext();
const namesContext = createContext()
const ComA = () => {
  return (
    <myName.Provider value={name}>
      <btnContext.Provider value={handleButton}>
        <namesContext.Provider value={nameList}>
        <ComB />
        </namesContext.Provider>
      </btnContext.Provider>
    </myName.Provider>
  );
};

export default ComA;
export { myName,  namesContext , btnContext};
