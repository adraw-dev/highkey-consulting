import React from "react";
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";

export interface ServicePageProps {
  slug?: string;
  title: string;
  description: string;
  offers?: string[];
  approach?: string;
  imageUrl: string;
  positionImage?: string;
}

const ServicePage = (props: ServicePageProps) => {
  return (
    <div
      id="service-page"
      key={props.slug}
      className="bg-gray-100 min-h-screen text-justify "
    >
      {/* <h1 className="text-4xl font-bold mb-8 text-center">{props.title}</h1> */}
      <div className="h-[20rem]   w-full rounded-2xl my-10 ">
        <SimpleParallax
          // overflow
          // scale={1.1}
          // transition="cubic-bezier(0,0,0,1)"
          maxTransition={40}
        >
          <Image
            className="h-[20rem] w-full  rounded-2xl "
            src={props.imageUrl}
            alt={props.title}
            style={{
              objectFit: "cover",
              objectPosition: `${props.positionImage ? props.positionImage : "center"}`,
            }}
            width={800}
            height={320}
          />
        </SimpleParallax>
        {/* <div
          style={{
            backgroundImage: `url(${props.imageUrl})`,
            backgroundPosition: `center`,
          }}
          className={`  bg-no-repeat bg-cover h-[20rem] w-full rounded-md shadow-xl`}
        ></div> */}
      </div>

      <p className="text-gray-700 mb-4 text-justify ">{props.description}</p>
      <div className="my-10">
        <h3 className="text-xl font-semibold mb-2">Our Offers</h3>
        <ul className="list-disc list-inside mb-4 ">
          {props.offers &&
            props.offers.map((offer, index) => (
              <li key={index} className="text-gray-700 mt-4">
                {offer}
              </li>
            ))}
        </ul>
      </div>
      <div className="my-10">
        <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
        <p className="text-gray-700">{props.approach}</p>
      </div>
    </div>
  );
};

export default ServicePage;
