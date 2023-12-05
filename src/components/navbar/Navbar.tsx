"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Our-Clients", href: "#our-clients" },
    { name: "Contacts", href: "#contacts" },
  ];
  return (
    <>
      <nav className="min-w-full max-w-full justify-between border-b-2 bg-white px-8 py-4 text-main-font-color md:flex md:px-14">
        <Image src={logo} alt="logo" width={100} height={120} />
        <div
          className="absolute right-8 top-6 cursor-pointer rounded border-4 border-main-color px-1 pt-1 text-main-color md:hidden"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faBars} className="h-full w-[20px]" />
        </div>
        <ul
          className={`content-center items-center gap-14 text-center text-lg font-bold text-gray-500 md:flex md:px-0 ${
            open ? "block " : "hidden "
          }`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={
                "md:pd-0 border-b-2 py-4 transition-all duration-150 ease-out last:border-none hover:text-main-color hover:ease-in md:border-none"
              }
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
