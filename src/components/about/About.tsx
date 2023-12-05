import React from "react";
import Title from "../title/Title";
import Image from "next/image";
import aboutImage from "../../../public/images/logo.png";

const About = () => {
  const sections = [
    {
      title: "WHO ARE WE?",
      content:
        "We are a creative agency raising the bar for creativity by stepping up traditional branding and marketing practices and combining them with innovation.",
    },
    {
      title: "WHAT DO WE DO?",
      content:
        "Media Mark develops Creative Strategies and Strategic Creatives. Since its inception in 2016, Media Mark has offered every client the best in brand and corporate communications. With an aim to create result-oriented, cost-effective, and objective-driven contact, we make our clients look good and sell better.",
    },
  ];

  return (
    <section id="about" className="min-h-screen md:px-14">
      <div className=" text-main-font-color">
        <Title title="About Us" subTitle="Who Are We" />
      </div>
      <div className="flex justify-center bg-main-color px-14 pt-14 text-white md:relative md:float-right md:w-3/4 md:py-20 md:pl-40 md:pr-10">
        <div className="absolute -left-10 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
          <Image src={aboutImage} alt="Image" width={500} />
        </div>
        <div className="leading-loose ">
          {sections.map((section, index) => (
            <div key={index} className="pb-14">
              <h3 className="pb-4 font-bold md:text-lg">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
