import { WrapperProps, WrapperWithStyles } from "@/utils/Interfaces";
import Link from "next/link";
import React from "react";

function Button({ children, styles, onClick }: WrapperWithStyles) {
  return (
    <Link onClick={onClick} href="#">
      <div
        style={{ ...styles }}
        className="px-5 py-2 rounded-md text-black font-bold bg-primary-clr w-fit hover:bg-primary-clr-light1 cursor-pointer"
      >
        {children}
      </div>
    </Link>
  );
}

export default Button;
