import React from "react";

const Email = () => {
  return (
    <div className="flex justify-center items-center h-64 bg-teal-400">
      <input
        placeholder="Enter your email here"
        type="text"
        className="py-2 w-1/3 rounded px-3 font-mono shadow-md"
      />
      <button className="bg-white shadow-md py-2 px-4 font-semibold bg-teal-900 text-white">
        Enlist
      </button>
    </div>
  );
};

export default Email;
