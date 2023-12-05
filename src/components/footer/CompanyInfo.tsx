import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const CompanyInfo = () => {
  return (
    <div>
      <h1 className="w-fit border-b py-4 font-bold text-main-color">
        Company Information
      </h1>
      <ul className="py-4  leading-loose text-main-font-color">
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLocationDot} className="h-[16px] w-[16px]" />
          <p>Bin Dirham Street, Al Najma, Doha</p>
        </li>
        <li className="flex items-center gap-4 ">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="sm"
            className="h-[16px] w-[16px]"
          />
          <Link href="mailto:media.mark4488@gmail.com">
            media.mark4488@gmail.com
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faPhone}
            size="sm"
            className="h-[16px] w-[16px]"
          />
          <p>+974 7709 0455</p>
        </li>
      </ul>
    </div>
  );
};

export default CompanyInfo;
