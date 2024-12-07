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
      <div className="grid grid-cols-2 gap-6 max-w-[90%] md:max-w-[80%] mx-auto">
        {data.appFeatures.map((app, index) => {
          const { heading, features, image, description } = app;
          return (
            <div
              key={index}
              className="flex flex-col px-10 py-5 items-center text-light-gray2 rounded-lg shadow-md shadow-gray-700 transition-transform transform mt-5"
            >
              <H3 styles={{ letterSpacing: "3px" }}>{heading}</H3>

              <div className="shadow-xl">
                <Image
                  src={image}
                  alt={`${heading} icon`}
                  width={350}
                  height={500}
                  className="mb-4"
                />
              </div>
              <Paragraph className="font-semibold text-start">
                {description}
              </Paragraph>

              <ul className="text-left px-6 pb-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="my-3">
                    {!!feature.provided ? (
                      <IconPlusText
                        iconClr="#37A72D"
                        iconComponent={FaCheck}
                        text={feature.text}
                        iconSpaceRight={0.7}
                      />
                    ) : (
                      <IconPlusText
                        iconClr="#FA7070"
                        iconComponent={FaLock}
                        text={feature.text}
                        iconSpaceRight={0.7}
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
