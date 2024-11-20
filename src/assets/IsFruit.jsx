import React from "react";

const IsFruit = () => {
  const fruits = [
    { name: "apple", isFruite: true },
    { name: "mango", isFruite: true },
    { name: "tomato", isFruite: false },
    { name: "potato", isFruite: false },
    { name: "banana", isFruite: true },
  ];
  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index} className="bg-slate-500">
          <p style={{ color: `${fruit.isFruite ? "red" : "green"}` }}>
            {fruit.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IsFruit;
