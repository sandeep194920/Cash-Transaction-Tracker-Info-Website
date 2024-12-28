import React from "react";
import { IconType } from "react-icons";
import Paragraph from "./Text/Paragraph";

type IconPlusTextT = {
  iconComponent: IconType;
  iconSize?: number;
  text: string;
  textClr?: string;
  lineHeight?: string;
  iconSpaceRight?: number;
  className?: string;
  iconClr?: string;
};
function IconPlusText({
  iconComponent: Icon,
  iconSize = 18,
  text,
  className,
  lineHeight = "1.5rem",
  iconSpaceRight = 0.7,
  iconClr = "",
}: IconPlusTextT) {
  return (
    <div
      style={{ gap: `${iconSpaceRight}rem` }}
      className={`flex items-center`}
    >
      <div
        className={`text-lg sm:text-xl md:text-2xl text-primary-clr ${className}`}
      >
        <Icon size={iconSize} color={iconClr} />
      </div>
      <Paragraph className={className} styles={{ lineHeight }}>
        {text}
      </Paragraph>
    </div>
  );
}

export default IconPlusText;
