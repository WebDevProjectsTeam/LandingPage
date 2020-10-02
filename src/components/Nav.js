import React from "react";

const Nav = () => {
  return (
    <div className="w-full py-4 px-16 shadow-md flex justify-between items-center">
      <h1 className="text-2xl text-teal-900 font-mono">Folktale</h1>
      <ul className="flex font-mono">
        <li className="mx-3 py-2 px-4 hover:bg-teal-400 hover:shadow hover:text-white rounded cursor-pointer">
          About
        </li>
        <li className="mx-3 py-2 px-4 hover:bg-teal-400 hover:shadow hover:text-white rounded cursor-pointer">
          Register
        </li>
      </ul>
    </div>
  );
};

export default Nav;
