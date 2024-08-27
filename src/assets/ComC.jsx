import React from "react";
import { useContext } from "react";
import { myName, namesContext, btnContext } from "./ComA";
const ComC = () => {
  const name = useContext(myName);
  const btnClicked = useContext(btnContext);
  const namesArray = useContext(namesContext);
  let num = true;
  return (
    <div>
      <p>Hello my name is {name}</p>
      <button onClick={() => btnClicked()}>Click me</button>
      {num &&
        namesArray.map((name) => {
          return (
            <ul key={name}>
              <li>{name}</li>
            </ul>
          );
        })}
    </div>
  );
};
export default ComC;
