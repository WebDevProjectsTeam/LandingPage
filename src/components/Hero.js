import React from "react";
import Logo from "../assets/myfolktale.jpg";
const Hero = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <img
        src={Logo}
        alt="folktale logo"
        className="w-64 h-64 rounded-full shadow-md mr-32"
      />
      <div className="ml-16">
        <h1 className="text-2xl text-teal-900 font-bold">Hero Title</h1>
        <p className="w-64 text-teal-800">
          Lorem ipsum dolor sit amet, his eu tollit aliquip legimus. Ea pri cibo
          concludaturque, in vel errem possit. Vix eripuit intellegat at.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
