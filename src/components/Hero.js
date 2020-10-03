import React from "react";
import Logo from "../assets/myfolktale.jpg";
const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <img
        src={Logo}
        alt="folktale logo"
        className="w-32 h-32 md:w-64 md:h-64 rounded-full shadow-md ml-4 mr-4 md:mr-32"
      />
      <div className="ml-4 md:ml-16">
        <h1 className="text-2xl text-teal-400 font-bold">Folktale is a collaborative storytelling platform for writers and fiction fans.</h1>
        <ul className="text-teal-800 py-4 pr-12">
          <li className="font-bold py-2">- Craft collective tales from inspiring story prompts.</li>
          <li className="font-bold py-2">- Explore alternate endings. You control the story!</li>
          <li className="font-bold py-2">- Connect with writers and people who read fiction.</li>
          <li className="font-bold py-2">- Receive feedback to help you elevate your craft!</li>
        </ul>
        <p className="text-teal-800 text-xl py-4 pr-12">
          Folktale launches soon. Enter your email below for early access! 
        </p>
      </div>
    </div>
  );
};

export default Hero;
