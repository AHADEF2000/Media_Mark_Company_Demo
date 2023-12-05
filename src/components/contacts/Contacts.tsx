import React from "react";
import Form from "./Form";
import Map from "./Map";
const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex min-h-screen flex-col items-center gap-20 bg-main-color px-14 py-14 md:flex-row"
    >
      <div className="md:w-1/2">
        <h3 className="pb-4 uppercase text-teal-900">
          contact our advertinsg office
        </h3>
        <h4 className="pb-4 text-xl text-white">Get in Touch With Us</h4>
        <p className="pb-4 text-sm text-white">
          Contact us today for information on how you can get start with the
          Mark Media Advertising.
        </p>
        <Form />
      </div>
      <div className="w-full md:w-1/2">
        <Map />
      </div>
    </section>
  );
};

export default Contacts;
