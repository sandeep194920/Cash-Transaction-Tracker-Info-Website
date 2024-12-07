import React from "react";
import { H2, H3 } from "./Text/Heading";
import { FaCheckCircle } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="my-16">
      <H2>Why Choose Us?</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90%] md:max-w-[80%] mx-auto mt-8">
        <div className="flex flex-col items-center bg-gradient-to-r from-primary-clr to-[#0590ac] text-white p-6 rounded-lg shadow-md">
          <FaCheckCircle className="text-3xl mb-4" />
          <H3>Expert Team</H3>
          <p className="text-center mt-4 text-sm text-white">
            Skilled professionals with industry experience.
          </p>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-primary-clr to-[#0590ac] text-white p-6 rounded-lg shadow-md">
          <FaCheckCircle className="text-3xl mb-4" />
          <H3>Customer-Centric Approach</H3>
          <p className="text-center mt-4 text-sm text-white">
            Tailored solutions that meet specific needs.
          </p>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-primary-clr to-[#0590ac] text-white p-6 rounded-lg shadow-md">
          <FaCheckCircle className="text-3xl mb-4" />
          <H3>Innovation</H3>
          <p className="text-center mt-4 text-sm text-white">
            Commitment to R&D and staying ahead of technological trends.
          </p>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-primary-clr to-[#0590ac] text-white p-6 rounded-lg shadow-md">
          <FaCheckCircle className="text-3xl mb-4" />
          <H3>Quality Assurance</H3>
          <p className="text-center mt-4 text-sm text-white">
            Rigorous quality checks to ensure the highest standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
