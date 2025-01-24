// import React from "react";
// import { useContext } from "react";
// import { myContext } from "./ComA";
// const ComC = () => {
//   const { num, handleInc, handleDec } = useContext(myContext);
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => handleInc()}>inc</button>
//       <button onClick={() => handleDec()}>dec</button>
//     </div>
//   );
// };
// export default ComC;

import React from 'react'
import { myContext } from './ComA'
import { useContext } from 'react'
const ComC = () => {
  const {myDetails} = useContext(myContext)
  const {name,age,gender} = myDetails
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <p>name:{gender}</p>
    </div>
  )
}
export default ComC