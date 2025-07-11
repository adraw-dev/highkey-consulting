import Head from "next/head";
import React from "react";

const TestimonialPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <div className="flex justify-center items-center h-screen bg-gray-100 mb-[10%]">
        <div className="mx-auto max-w-7xl px-4 py-24  bg-lightgrey rounded-3xl ">
          <h1 className="text-2xl font-bold mb-4">TESTIMONIAL</h1>
        </div>
      </div>
    </>
  );
};

export default TestimonialPage;
