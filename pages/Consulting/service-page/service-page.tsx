import React from "react";
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";
import { Offers, servicesInfo } from "@/constants/service.const";
import Link from "next/link";

export interface ServicePageProps {
  slug?: string;
  title: string;
  description: string;
  offers?: Offers[];
  approach?: string;
  imageUrl: string;
  positionImage?: string;
}

const ServicePage = (props: ServicePageProps) => {
  return (
    <div
      id="service-page"
      key={props.slug}
      className="flex justify-between gap-20 bg-gray-100 min-h-screen text-justify  "
    >
      <div className="w-full md:w-3/4">
        <div className="h-[20rem]   w-full rounded-2xl my-10 ">
          <SimpleParallax maxTransition={40}>
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
        </div>

        <p className="text-gray-700 mb-4 text-justify ">{props.description}</p>
        <div className="my-10">
          <h3 className="text-2xl font-bold text-darkpurple mb-2">
            What We Offer
          </h3>
          <ul className=" mb-4 ">
            {props.offers &&
              props.offers.map((offer, index) => (
                <li
                  key={index}
                  className="flex items-center text-left text-gray-700 mt-4"
                >
                  <Image
                    src="/images/package/peacock.svg"
                    alt="Check Icon"
                    width={46}
                    height={46}
                    className="mr-2"
                  />
                  <div>
                    <p className="text-[#1A3B3B] font-semibold">{offer.title}</p>
                    <p>{offer.text}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="my-10 bg-[#95B1AE]/10 px-10 py-5">
          <h3 className="text-2xl font-semibold mb-2 text-darkpurple">
            Our Approach
          </h3>
          <p className="text-gray-700">{props.approach}</p>
        </div>
      </div>
      <div className="hidden md:block w-1/5">
        <h3 className="text-2xl text-darkpurple font-bold mb-2">
          Other Services
        </h3>
        <hr className="border-t-2 border-gray-300 mb-8" />

        {Array.isArray(servicesInfo) &&
          servicesInfo.map((service, idx) => (
            <Link
              href={`/Consulting/${service.slug}`}
              key={service.slug || idx}
            >
              <div className="flex items-start flex-col gap-3  mb-6">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={200}
                  height={100}
                  className="rounded-lg object-cover mr-4"
                  style={{
                    width: 200,
                    height: 100,
                    backgroundPosition: service.positionImage,
                  }}
                />
                <span className="font-semibold text-left text-gray-800 text-wrap">
                  {service.title}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ServicePage;
