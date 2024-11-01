import React, { useContext } from "react";
import { myContext } from "./ComA";
const ComB = () => {
  const { myDetails } = useContext(myContext);
  return (
    <div>
      <h1>{`my name is ${myDetails.name}`}</h1>
      <h1>{`my gender is ${myDetails.gender}`}</h1>
      <h1>{`my age is ${myDetails.age}`}</h1>
      <h1>{`my profession is ${myDetails.profession}`}</h1>
    </div>
  );
};
export default ComB;
