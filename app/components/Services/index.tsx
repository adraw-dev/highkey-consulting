import Image from "next/image";
import ServiceCard, { CardServicesProps } from "./components/service-cards";

const services: CardServicesProps[] = [
  {
    title: (
      <p>
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
    imageUrl: "/images/services/brand.jpg",
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
    imageUrl: "/images/services/beliefs.svg",
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
    imageUrl: "/images/services/beliefs.svg",
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
    imageUrl: "/images/services/beliefs.svg",
  },
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
    imageUrl: "/images/services/build.svg",
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
    imageUrl: "/images/services/build.svg",
  },
  {
    title: (
      <p>
        Gen Z Consumer
        <br />  Strategy
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
    imageUrl: "/images/services/build.svg",
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
          <h2 className="text-center font-semibold text-5xl  text-lightgrey">
            WHAT WE DO!
          </h2>
        </div>
        <div
          className="flex flex-row flex-nowrap overflow-x-auto my-16 lg:mx-5 gap-5 scroll-smooth  snap-x snap-mandatory [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {/* COLUMN-1 */}
          {services.map((service, index) => (
            <div className="snap-center " key={index}>
              <ServiceCard key={index} {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
