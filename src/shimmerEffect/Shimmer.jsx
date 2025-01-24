
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Shimmer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
          // console.error("Error fetching data:", err.message);
        }
      }, 2000);
    };

    fetchData();
  }, []);
  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          <h1>Shimmer Effect</h1>
          <ul className="list-none">
            {data.slice(0, 10).map((item) => (
              <li className="list_style" key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Display 10 skeleton loaders with varying widths to simulate content size
        <ul>
          <h1 className="loading">
            <span>please</span> <span>wait </span>
          </h1>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonTheme highlightColor="#C0C0C0">
              <li key={index} className="list_style">
                <Skeleton
                  circle={false}
                  width={`${Math.floor(Math.random() * (200 - 100) + 230)}px`}
                  height="25px"
                />
              </li>
            </SkeletonTheme>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Shimmer;
