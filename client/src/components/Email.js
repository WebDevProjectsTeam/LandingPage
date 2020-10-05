import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    fetch("/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  return (
    <div className="w-screen md:w-full flex justify-center items-center h-64 bg-teal-400">
      <input
        placeholder="Enter your email here"
        type="text"
        className="py-2 w-2/3 md:w-1/3 rounded px-3 font-mono shadow-md"
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-white shadow-md ml-2 py-2 px-4 font-semibold bg-teal-900 text-white rounded hover:text-teal-900 hover:bg-teal-200"
      >
        Enlist
      </button>
    </div>
  );
};

export default Email;
