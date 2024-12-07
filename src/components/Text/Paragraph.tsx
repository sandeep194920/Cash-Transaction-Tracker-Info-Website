import { WrapperWithStyles } from "@/utils/Interfaces";

function Paragraph({ children, className }: WrapperWithStyles) {
  return <p className={`text-white leading-8 ${className}`}>{children}</p>;
}
export default Paragraph;
