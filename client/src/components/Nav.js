import React from "react";
import insta from "../assets/instagramiconlg.svg";
import twit from "../assets/twittericonlg.svg";

const Nav = () => {
  return (
    <div className="w-screen md:w-full py-4 px-16 bg-teal-900 shadow-md flex justify-between items-center">
      <h1 className="text-2xl text-white font-mono">Folktale</h1>
      <ul className="flex justify-end font-mono">

        <li className="mx-2">
          <a 
            href="https://twitter.com/myfolktale"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                src={twit}
                height="32px"
                width="32px"
                alt="myfolktale on twitter"
            />
            </a>
        </li>
            
        <li className="mx-2">
          <a 
            href="https://instagram.com/myfolktale"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                src={insta}
                height="32px"
                width="32px"
                alt="myfolktale on instagram"
            />
            </a>
        </li>   
      </ul>
    </div>
  );
};

export default Nav;
