import React, { useState } from "react";
const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [progress, setProgress] = useState(false);
  const handleReset = () => {
    setTask("");
    setProgress(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(Math.random() * 10000),
      name: task,
      completed: Boolean(progress),
    };
    setTasks((prev) => [...prev, data]);
    setTask("");
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="task" className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            onChange={(e) => setTask(e.target.value)}
            type="text"
            name="task"
            placeholder="Enter task"
            value={task}
            autoComplete="off"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="progress" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            onChange={(e) => setProgress(e.target.value)}
            value={progress}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
          <span
            onClick={handleReset}
            className="text-red-500 cursor-pointer hover:underline"
          >
            Reset
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddTask;


