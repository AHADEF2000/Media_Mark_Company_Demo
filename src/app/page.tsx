import React from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../components/home/Slider"));
const About = dynamic(() => import("../components/about/About"));
const Services = dynamic(() => import("../components/services/Services"));
const Partners = dynamic(() => import("../components/partners/Partners"));
const Contacts = dynamic(() => import("../components/contacts/Contacts"));
const Footer = dynamic(() => import("../components/footer/Footer"));
const Navbar = dynamic(() => import("../components/navbar/Navbar"));

const page = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Slider />
        <Services />
        <About />
        <Partners />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default page;
