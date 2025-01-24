import React, { useState } from "react";
import useTitle from "../UseTitle";
const PostAPIMethod = () => {
  useTitle("post api");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    let data = { name, salary, age };
    fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => console.log("result =", result));
    console.log(data);
    setName("");
    setSalary("");
    setAge("");
  };
  return (
    <>
      <h1> PostAPIMethod</h1>
      <input
        value={name}
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        value={salary}
        type="text"
        placeholder="enter your salary"
        onChange={(e) => setSalary(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default PostAPIMethod;
