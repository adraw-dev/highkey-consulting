import React from "react";
import Image from "next/image";

interface HeaderProps {
  title?: string;
  description?: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <div className="bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] h-auto md:h-52 w-full pt-20 flex justify-center  relative">
      <Image
        src="/images/navbar/squares.svg"
        alt="hero-image"
        width={155.5335693359375}
        height={168}
        className="absolute left-0 hidden md:block"
      />
      <div className="flex  items-start mt-10 p-5 md:mt-0  justify-center gap-2">
        <Image
          src="/images/navbar/group.svg"
          alt="hero-image"
          width={56}
          height={56}
          //   className="absolute left-0 hidden md:block"
        />

        <h2 className="text-3xl md:text-4xl mt-30  text-white font-bold mb-8 text-center z-10">
          {title}
        </h2>
      </div>

      <Image
        src="/images/navbar/squares.svg"
        alt="hero-image"
        width={155.5335693359375}
        height={168}
        className="absolute right-0 hidden md:block"
      />
    </div>
  );
};

export default Header;
