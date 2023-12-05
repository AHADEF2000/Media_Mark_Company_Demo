import React from "react";

const QuickLinks = () => {
  return (
    <>
      <h1 className="flex w-fit border-b py-4 font-bold text-main-color">
        Quick Links
      </h1>
      <ul className="py-4  leading-loose text-main-font-color">
        <li className="transition-all duration-150 ease-out hover:text-main-color">
          <a href="#home">Home</a>
        </li>
        <li className="transition-all duration-150 ease-out hover:text-main-color">
          <a href="#about">About Us</a>
        </li>
      </ul>
    </>
  );
};

export default QuickLinks;
