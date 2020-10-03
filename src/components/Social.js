import React from "react";
import insta from "../assets/instagramiconlg.svg";
import twit from "../assets/twittericonlg.svg";

const Social = () => {


  return (
    <div className="w-screen md:w-full mt-12 flex flex-col items-center">
        <h2 className="text-xl font-bold text-teal-400 text-center">
            Follow @myfolktale on social media<br />for even more great content!
        </h2>
        <div className="w-screen md:w-full mt-8 mb-12 flex justify-around">
            <a 
            href="https://twitter.com/myfolktale"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                src={twit}
                height="64px"
                width="64px"
                alt="myfolktale on twitter"
            />
            </a>
            
            <a 
            href="https://instagram.com/myfolktale"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img 
                src={insta}
                height="64px"
                width="64px"
                alt="myfolktale on instagram"
            />
            </a>
        </div>
    </div>
  );
};

export default Social;
