"use client";
import Image from "next/image";
import serviceData from "../../services.json";
import identityAndBranding from "../../../public/images/services/identity_and_branding.jpeg";
import DesignService from "../../../public/images/services/Design_Service.jpeg";
import Digital from "../../../public/images/services/Digital.jpeg";
import GigtItem from "../../../public/images/services/Gift_Item.jpeg";
import Uniform from "../../../public/images/services/Uniform.jpeg";
import Kiosk from "../../../public/images/services/Kiosk.jpeg";
import Laser from "../../../public/images/services/laser.jpeg";
import OfficePrenting from "../../../public/images/services/office_prenting.jpeg";
import IndoorAndOutDoor from "../../../public/images/services/Indoor_and_Outdoor.jpeg";

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
export const services = serviceData;
const combinedArray = services.map((obj, index) => ({
  ...obj,
  image: images[index],
}));

const ServiceCotnent = () => {
  return (
    <div className="flex-1 items-center pr-8 leading-relaxed">
      {combinedArray.map((item, index) => (
        <div id={item.header} key={index}>
          <h1 className="py-4 text-2xl text-main-color">{item.header}</h1>
          <div className="flex flex-col-reverse gap-10 py-4 md:flex-row">
            <p className=" leading-loose text-main-font-color">
              {item.content}
            </p>
            <div>
              <Image
                src={item.image}
                alt="Service Image"
                loading="lazy"
                className="h-[250px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCotnent;
