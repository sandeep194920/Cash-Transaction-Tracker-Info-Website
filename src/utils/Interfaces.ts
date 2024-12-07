import { ReactNode } from "react";

export interface WrapperProps {
  children?: ReactNode;
  styles?: {};
  dangerouslySetInnerHTML?: any;
}

export interface WrapperWithStyles extends WrapperProps {
  styles?: {};
  onClick?: () => void;
  textClr?: string;
  className?: string;
}
export interface CardWithIcon {
  heading: string;
  description: string | Array<string>;
  image: string;
  styles?: object;
}
