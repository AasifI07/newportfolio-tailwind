import React from "react";

function Primarybutton({ btnimage, title, alt, imgg }) {
  return (
    <div className="bg-amber-500 rounded-xl ml-5">
      <button
        className="sm:ml-10 mt-5 sm:mr-10 sm:pr-10 flex gap-2 w-50% sm:pl-5  md:flex  mb-5 mr-5 ml-5 pr-10 pl-5"
        placeholder={title}
      >
        <img
          className=" sm:mr-5 sm:ml-5  sm:mb-5 sm:mt-2 md:pl-10 mt-5 pt-1 ml-5 mb-5"
          src={imgg}
          alt="title"
        />
        <p className=" sm:mr-5 mt-2 sm:pr-10 sm:ml-5 text-24px mb-5 font-bold sm:pb-5 md:mb-10 md:mr-10 ml-10 pr-5 w-40px h-5 text-white text-px">
          {title}
        </p>
      </button>
    </div>
  );
}

export default Primarybutton;
