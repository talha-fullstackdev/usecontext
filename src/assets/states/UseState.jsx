import React, { useState } from "react";
const UseState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setData((prevData) => [
      ...prevData, // Spread the existing data
      { name, email, gender }, // Add the new entry
    ]);

    setName("");
    setEmail("");
    setGender("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="Enter your gender"
        />
        <button type="submit">Submit</button>
      </form>

      {data.map((value, index) => (
        <div key={index}>
          <p>Name: {value.userName}</p>
          <p>Email: {value.userEmail}</p>
          <p>Gender: {value.userGender}</p>
        </div>
      ))}
    </div>
  );
};

export default UseState;
