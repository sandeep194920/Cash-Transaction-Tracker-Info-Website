import React from "react";
import { H1 } from "./Text/Heading";
import Image from "next/image";
import Paragraph from "./Text/Paragraph";
import Button from "./Button/Button";
import { data } from "@/data/data";
import { handleScroll } from "@/utils/scrollUtil";
import { GiBulletBill, GiBullets } from "react-icons/gi";

function Header() {
  const { header } = data;
  const brandName = "Cash Transaction Tracker App";
  const dynamicHeading = header.heading.replace(
    "[brand]",
    `<span style="color: var(--primary-clr)">${brandName}</span>`
  );

  return (
    <section
      className="flex md:justify-between justify-center items-center md:items-start px-7 md:px-0 max-w-[100%] md:max-w-[80%] mx-auto space-x-0 md:space-x-20"
      id="about"
    >
      <div className="flex flex-col space-y-4 md:mt-10 mt-0">
        <H1
          styles={{ maxWidth: "90%" }}
          dangerouslySetInnerHTML={{ __html: dynamicHeading }}
        />

        <Paragraph className="font-extrabold text-xl">
          {header.tagLine[0]}
        </Paragraph>
        <Paragraph>{header.tagLine[1]}</Paragraph>

        <Paragraph>{header.tagLine[2]}</Paragraph>

        {header.tagLineBullets.map((tagLine) => {
          return (
            <div className="flex items-center gap-4" key={tagLine}>
              <GiBulletBill color="white" />
              <Paragraph key={tagLine}>{tagLine}</Paragraph>;
            </div>
          );
        })}

        <Button
          styles={{ marginTop: "2rem" }}
          onClick={() => handleScroll("demo")}
        >
          Watch a quick demo
        </Button>
      </div>
      <div className="hidden xl:block xl:w-[40rem] 2xl:w-[35rem] my-[-2rem] mb-[-4rem]">
        <Image src="/hero_img.png" alt="hero-img" width={600} height={700} />
      </div>
    </section>
  );
}

export default Header;
