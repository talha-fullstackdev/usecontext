import React, { useContext } from "react";
import { methodsContext } from "./ComOne";
const BioData = () => {
  const { myDetails } = useContext(methodsContext);
  return (
    <div>
      <h1>{`My name is ${myDetails.name}`}</h1>
      <h1>{`My age is ${myDetails.age}`}</h1>
      <h1>{`My profession is ${myDetails.profession}`}</h1>
      <h1>{`My city is ${myDetails.city}`}</h1>
      <h1>{`My gender is ${myDetails.gender}`}</h1>
    </div>
  );
};
export default BioData;
