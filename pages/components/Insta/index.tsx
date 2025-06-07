"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const InstaLink = ({ href, imageUrl }: { href: string; imageUrl: string }) => {
  return (
    <Link href={href} className="mx-auto" target="_blank">
      <div className="mx-auto imageContainer h-72">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="h-full bg-cover bg-no-repeat rounded-3xl w-64"
        ></div>
        <button
          className="hidden text-white font-semibold absolute z-10"
          style={{
            top: "45%",
            right: "45%",
          }}
        >
          <Image
            src="/images/insta/linkedin.svg"
            alt="instagram"
            width={36}
            height={36}
          />
        </button>
      </div>
    </Link>
  );
};

const Insta = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const links = [
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296947593081696256-1f7m/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_1.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296211504071163904-HPzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_2.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296211504071163904-HPzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_3.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7299111558788395008-hqPx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_4.jpg",
    },
  ];

  return (
    <div className="mx-auto pt-20 mb-20 bg-[linear-gradient(180deg,_#8d1a81_0%,_#270724_55%,_#191617_62%)] pb-16 md:px lg:px-32 sm:px-6 lg:mb-0  ">
      <h2 className="text-4xl lg:text-65xl flex justify-center  font-semibold  md:font-bold sm:leading-tight  text-center text-white">
        Connect with us on LinkedIn
      </h2>
      <div className="mt-10 ">
        <Carousel plugins={[plugin.current]} className="px-2 md:px-5 w-full">
          <CarouselContent className="">
            {links.map((link, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="  md:basis-1/2 lg:basis-1/4 2xl:basis-1/4"
                >
                  <InstaLink
                    key={index}
                    href={link.href}
                    imageUrl={link.imageUrl}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
       
      </div>
    </div>
  );
};

export default Insta;
