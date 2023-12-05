import React from "react";
import { services } from "./ServiceCotnent";

const sideBar = () => {
  return (
    <>
      <h1 className="px-4 pb-4 font-bold text-main-color">Our Services</h1>
      {services.map((service, index) => (
        <div className="border-l" key={index}>
          <a
            href={`#${service.header}`}
            className="px-4 transition-all duration-200 ease-in-out hover:text-main-color"
          >
            {service.header}
          </a>
        </div>
      ))}
    </>
  );
};

export default sideBar;
