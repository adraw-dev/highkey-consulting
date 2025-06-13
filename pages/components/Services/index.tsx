"use client";
import Image from "next/image";
import AutoPlayMethods from "./components/demo-slider";
import ServiceCard, { CardServicesProps } from "./components/service-cards";

const services: CardServicesProps[] = [
  {
    title: (
      <p className="drop-shadow-xl">
        Communications
        <br /> Strategy
      </p>
    ),
    subtitle: (
      <div>
        <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
          Develop a cohesive visual identity, including logos, color palettes,
          typography, and brand guidelines that reflect your essence and
          resonate with your audience.
        </p>
      </div>
    ),
    description: "",
    imageUrl: "/images/services/strategy.jpg",
    url: "/Services/communications-strategy",
  },
  {
    title: (
      <p>
        Marketing/ <br /> Storytelling
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/marketing.jpg",
    postionImage: "top",
    url: "/Services/marketing-storytelling",
  },
  {
    title: (
      <p>
        Diversity,
        <br /> Equity + Inclusion
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/lgtb.jpg",
    url: "/Services/diversity-equity-inclusion",
  },
  {
    title: (
      <p>
        Brand Activations
        <br /> Event Planning
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/event.jpg",
    url: "/Services/brand-activations-event-planning",},
  {
    title: (
      <p>
        Brand &
        <br /> Strategy
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/brand.jpg",
    url: "/Services/brand-strategy",
  },
  {
    title: (
      <p>
        Personal
        <br /> Branding
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/personal_brand.jpg",
    url: "/Services/personal-branding",
  },
  {
    title: (
      <p>
        Gen Z Consumer
        <br /> Strategy
      </p>
    ),
    subtitle: (
      <p className="drop-shadow-2xl  mt-7 text-4xl font-bold ">
        Develop a cohesive visual identity, including logos, color palettes,
        typography, and brand guidelines that reflect your essence and resonate
        with your audience.
      </p>
    ),
    description: "",
    imageUrl: "/images/services/gen_z.jpg",
    postionImage: "top",
    url: "/Services/gen-z-consumer-strategy",
  },
];

const Services = () => {
  return (
    <div className="w-full">
      <Image
        className="absolute -mt-48 -left-[18rem] rotate-[52deg] -z-10 w-2/3 lg:block hidden"
        src="/images/banner/snake.svg"
        alt="hero-imageUrl"
        width={500}
        height={10}
      />
      <div className="mx-auto w-full lg:w-[80%] px-2 mt-32   sm:py-4 lg:px-8 rounded-3xl">
        <div className="w-full mx-auto flex justify-center">
          <h2 className="text-center font-semibold text-5xl  mb-10 text-lightgrey">
            Ready to take your business <br /> to the next level?
          </h2>
        </div>

        <AutoPlayMethods>
          {services.map((service, index) => (
            <div className="snap-center " key={index}>
              <ServiceCard key={index} {...service} />
            </div>
          ))}
        </AutoPlayMethods>
      </div>
    </div>
  );
};

export default Services;
