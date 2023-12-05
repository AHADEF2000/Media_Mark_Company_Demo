"use client";
import React, { useState } from "react";
import Title from "../title/Title";
import Image from "next/image";
import Afood from "../../../public/images/AFOOD.png";
import Alryyan from "../../../public/images/Al_Ryyan.png";
import Ashghal from "../../../public/images/Ashghal.png";
import Decc from "../../../public/images/DECC.png";
import DailyCafe from "../../../public/images/Daily_cafe.png";
import DolphineEnergy from "../../../public/images/Dolphien_Energy.png";
import Empire from "../../../public/images/Empire.png";
import HealthCenter from "../../../public/images/Health_center.png";
import IslamicInsurance from "../../../public/images/Islamic_Gate_insurance.png";
import LeaderGroup from "../../../public/images/Leader_skin_group.png";
import MasrafAlryyan from "../../../public/images/Masraf_Al_Ryyan.png";
import Nandos from "../../../public/images/Nanndos.png";
import QatarBank from "../../../public/images/Qatar_Bank.png";
import QatarOlympics from "../../../public/images/Qatar_Olympics.png";
import QatarPetroleum from "../../../public/images/Qatar_petroleum.png";
import QatarPorts from "../../../public/images/Qatar_ports.png";
import QatarUniversity from "../../../public/images/Qatat_university.png";
import Ramco from "../../../public/images/Ramco.png";
import TheSupCommOfJus from "../../../public/images/The_Superiror_Committe_of_justice.png";
import Waqod from "../../../public/images/Waqod.png";
import ZakkatFund from "../../../public/images/Zakkat_fund.png";
import MiOfEdu from "../../../public/images/ministrey_of_Education.png";
import MiOfCommerce from "../../../public/images/ministrey_of_commerce.png";
import MiOfYouthAndSports from "../../../public/images/ministrey_of_youth_and_sports.png";

const Partners = () => {
  const [showAll, setShowAll] = useState(false);

  const partners = [
    // Add your partner data here
    { logo: Afood },
    { logo: Alryyan },
    { logo: Ashghal },
    { logo: Decc },
    { logo: DailyCafe },
    { logo: DolphineEnergy },
    { logo: Empire },
    { logo: HealthCenter },
    { logo: IslamicInsurance },
    { logo: LeaderGroup },
    { logo: MasrafAlryyan },
    { logo: Nandos },
    { logo: QatarBank },
    { logo: QatarOlympics },
    { logo: QatarPetroleum },
    { logo: QatarPorts },
    { logo: QatarUniversity },
    { logo: Ramco },
    { logo: TheSupCommOfJus },
    { logo: Waqod },
    { logo: ZakkatFund },
    { logo: MiOfEdu },
    { logo: MiOfCommerce },
    { logo: MiOfYouthAndSports },

    // Add more partner objects as needed
  ];

  const visiblePartners = showAll ? partners : partners.slice(0, 6);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="our-clients" className="h-full px-14">
      <div className="text-main-font-color">
        <Title title="Partners" subTitle="Our Clients" />
      </div>
      <div className="grid grid-cols-1 justify-center gap-8 pb-20 md:grid-cols-6">
        {visiblePartners.map((partner, index) => (
          <div key={index} className="rounded border p-4 shadow-xl">
            <Image loading="lazy" src={partner.logo} alt="Paartner's Logo" />
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-8">
        {partners.length > 6 && (
          <button
            type="button"
            className="rounded bg-main-color px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-teal-800"
            onClick={handleViewMoreClick}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Partners;
