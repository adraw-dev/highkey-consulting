import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router'


const ConsultingPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <div className="bg-gray-100 min-h-screen ">
        <div className="mx-auto  px-6 lg:px-[5rem] pt-20 lg:pt-28 pb-16   mt-10">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {router.query.slug}
          </h1>
          <div className="border-t-2 border-gray-300 my-8"></div>
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;
