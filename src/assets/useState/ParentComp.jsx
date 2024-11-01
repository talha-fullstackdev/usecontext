import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
const ParentComp = () => {
  const [data, setData] = useState(0);
  return (
    <div>
      <ChildOne data={data} />
      <ChildTwo setData={setData} data={data} />
    </div>
  );
};

export default ParentComp;
