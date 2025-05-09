import  { useState } from "react";
import employees from "./Data";
import "./emp.css";
const SortingEmployees = () => {
  const [employeeData, setEmployeeData] = useState(employees);
  const handleSort = () => {
    const sortedEmployees = [...employeeData].sort(
      (a, b) => b.salary - a.salary
    ); // sorting the employees in a new array and then seting it to setEmployeeData
    setEmployeeData(sortedEmployees);
    // console.log("clicked");
  };

  return (
    <>
      <div className="emp-container">
        {employeeData.map((employee) => (
          <div className="emp" key={employee.id}>
            <h1>id:{employee.id}</h1>
            <p>name:{employee.name}</p>
            <p>gender:{employee.gender}</p>
            <p>age:{employee.age}</p>
            <p>salary:{employee.salary}</p>
            <p>department:{employee.department}</p>
            <p>joiningDate:{employee.joiningDate}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSort} className="btn">
        sort employees salary wise
      </button>
    </>
  );
};

export default SortingEmployees;
////////////////
// import React, { useState } from 'react';
// import employees from './Data';
// import './emp.css';

// const SortingEmployees = () => {
//   const [employeeData, setEmployeeData] = useState(employees);

//   const handleSort = () => {
//     // Create a new sorted array without mutating the state
//     const sortedEmployees = [...employeeData].sort((a, b) => a.salary - b.salary);
//     setEmployeeData(sortedEmployees); // Update state with the sorted array
//   };

//   return (
//     <>
//       <div className='emp-container'>
//         {employeeData.map((employee) => (
//           <div className='emp' key={employee.id}>
//             <h1>id: {employee.id}</h1>
//             <p>name: {employee.name}</p>
//             <p>gender: {employee.gender}</p>
//             <p>age: {employee.age}</p>
//             <p>salary: {employee.salary}</p>
//             <p>department: {employee.department}</p>
//             <p>joiningDate: {employee.joiningDate}</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleSort} className='btn'>
//         Sort Employees Salary Wise
//       </button>
//     </>
//   );
// };

// export default SortingEmployees;
