import React from "react";
import { H2, H3 } from "./Text/Heading";
import IconPlusText from "./IconPlusText";
import { FaArrowRight, FaCheck, FaLock } from "react-icons/fa";
import Image from "next/image";
import { data } from "@/data/data";
import Paragraph from "./Text/Paragraph";

function AppFeatures() {
  return (
    <section id="features" className="">
      <H2>CTT App Features</H2>
      <div className="grid grid-cols-2 md:gap-6 gap-2 max-w-[95%] md:max-w-[80%] mx-auto">
        {data.appFeatures.map((app, index) => {
          const { heading, features, image, description } = app;
          return (
            <div
              key={index}
              className="flex flex-col md:px-10 md:py-5 px-1 py-2 items-center text-light-gray2 rounded-lg shadow-md shadow-gray-700 transition-transform transform mt-5"
            >
              <H3 styles={{ letterSpacing: "1px" }}>{heading}</H3>

              <div className="shadow-xl hidden md:block">
                <Image
                  src={image}
                  alt={`${heading} icon`}
                  width={350}
                  height={500}
                  className="mb-4"
                />
              </div>
              <Paragraph className="font-semibold text-start hidden md:block">
                {description}
              </Paragraph>

              <ul>
                {/* <ul className="text-left md:px-6 md:pb-5 px-0 pb-0"> */}
                {features.map((feature, idx) => (
                  <li key={idx} className="my-3">
                    {!!feature.provided ? (
                      <IconPlusText
                        iconClr="#37A72D"
                        iconComponent={FaCheck}
                        text={feature.text}
                        iconSpaceRight={0.7}
                        className="text-sm md:text-base"
                      />
                    ) : (
                      <IconPlusText
                        iconClr="#FA7070"
                        iconComponent={FaLock}
                        text={feature.text}
                        iconSpaceRight={0.7}
                        className="text-sm md:text-base"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AppFeatures;
