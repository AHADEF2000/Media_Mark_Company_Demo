"use client";
import React from "react";
import Title from "../title/Title";
import Link from "next/link";
import serviceData from "../../services.json";
import Image from "next/image";
import identityAndBranding from "../../../public/images/services/identity_and_branding.jpeg";
import DesignService from "../../../public/images/services/Design_Service.jpeg";
import Digital from "../../../public/images/services/Digital.jpeg";
import GigtItem from "../../../public/images/services/Gift_Item.jpeg";
import Uniform from "../../../public/images/services/Uniform.jpeg";
import Kiosk from "../../../public/images/services/Kiosk.jpeg";
import Laser from "../../../public/images/services/laser.jpeg";
import OfficePrenting from "../../../public/images/services/office_prenting.jpeg";
import IndoorAndOutDoor from "../../../public/images/services/Indoor_and_Outdoor.jpeg";

const Services = () => {
  const images = [
    OfficePrenting,
    Laser,
    Digital,
    DesignService,
    identityAndBranding,
    GigtItem,
    Uniform,
    Kiosk,
    IndoorAndOutDoor,
  ];
  const cards = serviceData;
  const combinedArray = cards.map((obj, index) => ({
    ...obj,
    image: images[index],
  }));
  return (
    <section id="services" className="min-h-screen  px-14">
      <div className="text-main-font-color">
        <Title title="Services" subTitle="At Your Service Always" />
      </div>
      <div className="grid grid-cols-1 justify-center gap-x-32 gap-y-10 md:grid-cols-3 ">
        {combinedArray.map((card, index) => (
          <div key={index} className=" overflow-hidden rounded bg-teal-50">
            <Image
              src={card.image}
              alt="service Image"
              className="h-[250px] bg-teal-900"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="py-4 text-xl font-bold text-main-color">
                {card.header}
              </h2>
              <p className="line-clamp-5  text-main-font-color">
                {card.content}
              </p>
              <Link
                href={`/services#${card.header}`}
                className="flex items-center justify-center text-white"
              >
                <button
                  className="my-4 rounded bg-main-color p-2  transition duration-300 ease-in-out hover:bg-teal-800"
                  type="button"
                >
                  Continue reading
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
