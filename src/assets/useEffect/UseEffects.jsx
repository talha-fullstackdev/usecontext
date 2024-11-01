import { useEffect, useState } from "react";
import "./useeffect.css";
const UseEffects = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
    console.log(data);
  }, []);
  console.log(data);
  return (
    <h1>
      <li>{data && data.userId}</li>
      <li>{data && data.title}</li>
      <li>{data && data.completed}</li>
      <li></li>
    </h1>
  );
};

export default UseEffects;
