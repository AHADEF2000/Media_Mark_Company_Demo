"use client";
import React, { useEffect, useRef } from "react";
import ServicePageTitle from "../../components/ServicePage/ServicePageTitle";
import ServiceCotnent from "../../components/ServicePage/ServiceCotnent";
import Sidebar from "../../components/ServicePage/Sidebar";
import { motion, useInView, useAnimation } from "framer-motion";

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);
  return (
    <section className="min-h-screen px-14 py-20">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="leading-loose md:text-center">
          <ServicePageTitle />
          <hr />
        </div>
        <div className="flex py-20">
          <ServiceCotnent />
          <div className="sticky top-4 hidden h-full leading-loose text-main-font-color md:block">
            <Sidebar />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
