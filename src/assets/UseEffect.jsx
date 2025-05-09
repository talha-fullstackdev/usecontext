
import { useState } from "react";
import { useEffect } from "react";
const UseEffect = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData);
    };
    getApiData();
  }, []);

  return <div>{data}</div>;
};
export default UseEffect;
