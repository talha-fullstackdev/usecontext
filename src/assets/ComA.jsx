import React from "react";
import ComB from "./ComB";
import { createContext } from "react";
// ***** Data to Pass to Component C *****
const nameList = ["Talha", "hamza", "Zarar"];
const name = "Talha Nawaz"
const handleButton = () => {
  alert("Succesful");
};
// context of data
const btnContext = createContext();
const myName = createContext();
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
