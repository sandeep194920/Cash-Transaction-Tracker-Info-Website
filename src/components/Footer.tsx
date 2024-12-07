import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black  text-primary-clr py-4">
      <div className="flex max-w-[90%] md:max-w-[80%] mx-auto items-center">
        <Image src="/logo.png" alt="zenorbis-logo" width={100} height={100} />
        <div className="max-w-[90%] mx-auto text-center items-center">
          {/* <div className="flex justify-center space-x-4 text-2xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0590ac]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0590ac]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0590ac]"
            >
              <FaLinkedinIn />
            </a>
          </div> */}

          <div className="mt-6 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Staar Coding. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
