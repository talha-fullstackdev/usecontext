// import React, { useEffect, useState } from "react";
// const Shimmer = () => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   useEffect(() => {
//     const fetchData = async (url) => {
//       try {
//         let response = await fetch(url);
//         response = await response.json();
//         setData(response);
     
//       } catch (err) {
//         setError(err.message);
//         console.log(error);
//       }
//     };
//     fetchData("https://jsonplaceholder.typicode.com/todos");
//   }, []);
//   console.log(data)
//   return <div>
//                 <h1>shimmer effect</h1>
//   </div>;
// };

// export default Shimmer;
//////
// import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton"
// const Shimmer = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching data:", err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Shimmer Effect</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : data ? (
//         <ul>
//           {data.slice(0, 10).map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <Skeleton/>
//       )}
//     </div>
//   );
// };

// export default Shimmer;
/////////////////////
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shimmer Effect</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <ul>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        // Display 10 skeleton loaders while data is loading
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <Skeleton  />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shimmer;
