import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import CompanyInfo from "./CompanyInfo";
import QuickLinks from "./QuickLinks";
import ServicesLink from "./ServicesLink";

const Footer = () => {
  return (
    <div className="flex items-center bg-white py-4">
      <Image src={logo} alt="logo" width={200} className="hidden md:flex" />
      <div className="flex w-full flex-col px-14 md:flex-row md:justify-between md:text-left">
        <div>
          <QuickLinks />
        </div>
        <div>
          <ServicesLink />
        </div>
        <div>
          <CompanyInfo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
