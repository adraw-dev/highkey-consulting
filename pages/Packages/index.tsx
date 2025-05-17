import Head from "next/head";
import Image from "next/image";
import React from "react";
import PackageCard from "./package-card/package-card";
import Header from "../components/Header";
import PickBrain from "./pick-brain/pick-brain";

const PackagePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>
      <Header title="Packages" />

      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="mx-auto  px-6 lg:px-[5rem] 2xl:px-[17rem] pt-20  ">
          <h3 className="text-4xl mb-12 text-center font-bold text-darkpurple ">
            Highkey Consulting has crafted the below service packages <br />
            to meet the needs of all different types of businesses.
          </h3>
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
          <p className="text-2xl mt-12 mb-8 text-center font-medium">
            No project is too big or too small.
            <br /> We offer a variety of a la carte services, as well as
            individual consulting sessions on very specific issues. <br />
            Please reach out to us with your inquiry, and we can put together a
            plan to suit your needs.
            <br /> We love an individualized approach.
          </p>
          {/* add a image with the title to pick my brain */}
        </div>
      </div>
      <PickBrain />
    </>
  );
};

export default PackagePage;
