import React from "react";

const ServicesLink = () => {
  const services = [
    "Offset Printing",
    "Laser Printing",
    "Digital Printing",
    "Design Service",
    "Gift Item Creatives",
    "Uniform",
    "Indoor and Outdoor Printing",
    "Company Identity and Branding Creatives",
    "Kiosk Advertising Screen & Exhibition Both",
  ];
  return (
    <>
      <h1 className="w-fit border-b py-4  font-bold text-main-color">
        Services
      </h1>
      <ul className="grid grid-cols-2 py-4  leading-loose text-main-font-color">
        {services.map((service, index) => (
          <li
            key={index}
            className="transition-all duration-150 ease-out hover:text-main-color"
          >
            <a href={`/services#${service}`}>{service}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServicesLink;
