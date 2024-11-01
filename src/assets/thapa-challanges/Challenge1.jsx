import React, { useState, useEffect } from "react";
import users from "./UserData";
const Challenge1 = () => {
  const [user, setUser] = useState([]);
    useEffect(() => {
    setUser(users);
  }, []);
  return (
    <ul>
      {user.map((data, index) => (
        <li
          className=""
          style={{color:"red",fontSize:"22px",listStyleType: "none" }}
          key={index}
        >{`my name is ${data.name} and my age is ${data.age}`}</li>
      ))}
    </ul>
  );
};

export default Challenge1;
