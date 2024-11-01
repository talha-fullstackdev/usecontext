import React from "react";
const ChildTwo = ({ setData }) => {
  return (
    <button
      onClick={() => setData((prev) => (prev === 0 ? prev + 1 : prev * 5))}
    >
      increment
    </button>
  );
};

export default ChildTwo;
