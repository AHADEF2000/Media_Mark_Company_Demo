import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <>
      <section className="min-h-screen bg-main-color px-14  text-center text-white">
        <h1 className="py-14 text-3xl md:text-5xl">
          Welcome To Media Mark Advertising
        </h1>
        <div className="text-lg md:text-xl md:leading-[3]">
          <p>
            Media Mark Advertising is a company driven by a vision aligned with
            the National Vision of Qatar. We go beyond mere transactions,
            instead of building mutually beneficial relationships with our
            clients. through our quality delivery, we enable and nurture the
            ambitions of our customers, staff, and stakeholders.
          </p>
        </div>
        <button
          title="inquiry"
          type="button"
          className="my-10 rounded border px-12 py-4 shadow-xl"
        >
          <Link
            href="mailto:media.mark4488@gmail.com"
            className="transition-all duration-150 ease-out hover:mr-4"
          >
            WRITE TO US
          </Link>
          <FontAwesomeIcon icon={faArrowRight} className="h-[16px] w-[16px]" />
        </button>
      </section>
    </>
  );
};

export default Welcome;
