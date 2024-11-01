import React from "react";
const ShowTask = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((val) => val.id !== id));
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {tasks.map((val) => (
        <div
          key={val.id}
          className="flex items-center justify-between bg-white p-3 my-2 rounded-lg shadow-sm"
        >
          <div>
            <ul className="list-disc ml-4">
              <li className="text-sm font-semibold text-gray-700">
                {val.name}
              </li>
              <li className="text-xs text-gray-500">
                {val.completed ? "Completed" : "Pending"}
              </li>
            </ul>
          </div>
          <button
            onClick={() => handleDelete(val.id)}
            className="bg-red-500  text-white text-8xl px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowTask;
