"use client";
import React, { useEffect, useRef, useState } from "react";

const Example = () => {
  const containerRef = useRef(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const target = containerRef.current;

    // Observer to check when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInside(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // Disable or enable page scroll
  useEffect(() => {
    if (isInside) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isInside]);

  return (
    <div className="h-[200vh] bg-gray-900 flex items-center justify-center">
      <div
        ref={containerRef}
        className="h-[70vh] w-[80%] bg-gray-800 overflow-y-auto p-6 rounded-md"
        onWheel={(e) => e.stopPropagation()} // Prevent outer scroll interference
      >
        <div className="h-[50vh] bg-blue-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 1
        </div>
        <div className="h-[50vh] bg-green-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 2
        </div>
        <div className="h-[50vh] bg-red-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 3
        </div>
        <div className="h-[50vh] bg-yellow-500 flex items-center justify-center text-white text-xl">
          Section 4
        </div>
      </div>
    </div>
  );
};

export default Example;
