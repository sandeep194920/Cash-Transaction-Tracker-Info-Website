"use client";

import Image from "next/image";
import Button from "./Button/Button";
import { useState } from "react";
import Menu from "./Menu";
import { data } from "@/data/data";
import { handleScroll } from "@/utils/scrollUtil";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const {
    header: { navLinks },
  } = data;
  return (
    <nav className="flex max-w-[80%] mb-5 mx-auto justify-between items-center shadow-sm">
      <Image
        style={{ marginLeft: "-1.3rem" }}
        src="/logo.png"
        alt="ctt-logo"
        width={120}
        height={100}
      />
      <div className="hidden lg:visible lg:flex space-x-14 items-center text-gray-400">
        <ul className="flex space-x-14">
          {navLinks.slice(0, navLinks.length - 1).map((navLink) => {
            return (
              <li
                className="cursor-pointer hover:border-b-2 hover:border-y-primary-clr"
                onClick={() => handleScroll(navLink.link)}
                key={navLink.name}
              >
                {navLink.name}
              </li>
            );
          })}
        </ul>
        <Button onClick={() => handleScroll("get-in-touch")}>
          Reach out to us
        </Button>
      </div>
      <div
        onMouseOver={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="visible lg:hidden group cursor-pointer relative"
      >
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        <div className="w-6 h-0.5 bg-primary-clr my-1 transition-all duration-300 group-hover:h-1"></div>
        {showMenu && <Menu />}
      </div>
    </nav>
  );
}

export default Navbar;
