import React, { useState, useEffect } from 'react';

const APINestjs = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        let response = await fetch("http://localhost:3000/student");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    handleFetch();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default APINestjs;
