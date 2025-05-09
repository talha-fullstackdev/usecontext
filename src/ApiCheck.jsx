import  { useState, useEffect } from 'react';
import useTitle from './UseTitle';

const ApiCheck = () => {
  useTitle("fetch data from backend")
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    try {
      let response = await fetch("http://localhost:3000/");
      let data = await response.json();
      setApiData(data);
      console.log(data); // Log the parsed data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  };

  useEffect(() => {
    getData(); // Call getData when the component mounts
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div>
    <h1 style={{ color: "green" }}>API Data:</h1>
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Gender</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Department</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Position</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((data) => (
          <tr key={data._id}>
            <td style={{ border: "1px solid black", padding: "8px" }}>{data._id.substring(0,8)}</td>     
            <td style={{ border: "1px solid black", padding: "8px" }}>{data.name}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{data.email}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{data.gender}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{data.department}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{data.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default ApiCheck;
// note  here i made the id short becasue it is to big just for display