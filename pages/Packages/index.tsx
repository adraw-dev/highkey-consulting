import Head from "next/head";
import Image from "next/image";
import React from "react";
import PackageCard from "./package-card/package-card";

const PackagePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <div className="bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] h-52 w-full pt-20 flex justify-center  relative">
        <Image
          src="/images/navbar/squares.svg"
          alt="hero-image"
          width={155.5335693359375}
          height={168}
          className="absolute left-0 hidden md:block"
        />

        <h2 className="text-4xl text-white font-bold mb-8 text-center z-10">
        Service Packages
        </h2>

        <Image
          src="/images/navbar/squares.svg"
          alt="hero-image"
          width={155.5335693359375}
          height={168}
          className="absolute right-0 hidden md:block"
        />
      </div>

      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="mx-auto  px-6 lg:px-[5rem] 2xl:px-[17rem] pt-20  ">
          <p className="text-xl mb-12 text-center ">
            Highkey Consulting has crafted the below service packages to meet
            the needs of all different types of businesses. No project is too
            big or too small. We offer a variety of a la carte services, as well
            as individual consulting sessions on very specific issues. Please
            reach out to us with your inquiry, and we can put together a plan to
            suit your needs. We love an individualized approach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              title="low Key"
              description="Strategic Planning and Growth for the Individual or Small Team"
              features={[
                "One (1 hour) advisory call every month (12 calls per year)",
                "Profit & Loss Review (2 reviews per year)",
                "3 contract, content or document reviews per year (Discounted $100 hourly rate applies)",
                "One (1 hour) on-site evaluation visit (one visit every 12 months)",
              ]}
            />
            <PackageCard
              title="mid Key"
              description="Strategic Planning and Expansion for the Established Operation"
              features={[
                "One (1 hour) advisory call every 3 weeks (16 calls per year)",
                "Profit & Loss Quarterly Review (4 reviews per year)",
                "5 contract, content or document reviews per year (Discounted $85 hourly rate applies)",
                "Two (1 hour) on-site evaluation visits (one visit every 6 months)",
              ]}
              top
            />
            <PackageCard
              title="high Key"
              description="Strategic Planning and Investment for the Corporate Enterprise"
              features={[
                "Two (1 hour) advisory call every 4 weeks (24 calls per year)",
                "Bi-Monthly Profit & Loss Review (6 reviews per year)",
                "Unlimited contract, content or document reviews per year (Discounted $75 hourly rate applies)",
                "Four (1 hour) on-site evaluation visits (one visit every 3 months)",
              ]}
            />
          </div>
          {/* add a image with the title to pick my brain */}
        </div>
      </div>
    </>
  );
};

export default PackagePage;
