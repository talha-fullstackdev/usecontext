// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [num, setNum] = useState(0);
//   useEffect(() => {
//     alert("ueEffect Has been called");
//   }, []);
//   const handleInc = () => {
//     setNum(num + 1);
//   };
//   const handleDec = () => {
//     num > 0 ? setNum(num - 1) : alert("limit reach");
//   };
//   return (
//     <div>
//       <p>{num}</p>
//       <button onClick={handleInc}>increment</button>
//       <button onClick={handleDec}>decrement</button>
//     </div>
//   );
// };

// export default UseEffect;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData);
      console.log(actualData);
    };
    getApiData();
  }, []);

  return <div></div>;
};

export default UseEffect;
