import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="mx-auto  px-6 lg:px-[5rem] 2xl:px-[17rem] pt-20 lg:pt-28 pb-16 mt-10 ">
          <h1 className="text-4xl font-bold mb-8 text-center ">
            ABOUT JENNIFER
          </h1>
          <div className="border-t-2 border-gray-300 my-8"></div>
          <p className="mb-4 text-xl text-center">
            Jennifer Velez is the visionary founder of a forward-thinking
            business consultancy that blends professionalism with a touch of
            feminine strength. With a career dedicated to empowering
            organizations and people, Jennifer has mastered the art of balancing
            authority with approachability, creating a space where businesses
            feel both supported and inspired to reach new heights. With a
            background in ethnographic research, her consultancy is built on the
            belief that every organization has a unique story to tell, and she
            takes a creative, authentic, and values-based approach to help bring
            those stories to life. Though she works for a large Corporation, her
            passion is small woman-owned businesses in the South Bay of Los
            Angeles.
          </p>
          <Image
            src="/images/aboutus/Jennifer_about_1.jpg"
            alt="Jennifer Velez"
            width={1000}
            height={730}
            className="my-10 mx-auto rounded-lg"
          />
          <p className="mb-4 text-xl">
            Jennifer’s expertise lies in helping businesses uncover their true
            potential through strategic growth, innovative thinking, and
            purpose-driven leadership.
          </p>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mx-auto md:flex-row text-xl lg:justify-between  mt-9 gap-16">
              <Image
                src="/images/aboutus/Jennifer_aboutUS.jpg"
                alt="Jennifer Velez"
                width={300}
                height={200}
                className="mx-auto md:mx-0 rounded-lg"
              />
              <div>
                <p className="mb-4">
                  Her consultancy’s brand—reflected in its logo, which evokes
                  freedom, individuality, and boundless potential—mirrors her
                  commitment to helping clients break free from limitations and
                  embrace their unique identity. Whether guiding startups,
                  non-profits or established enterprises, Jennifer’s tailored
                  strategies are designed to foster resilience, authenticity,
                  and sustainable success.
                </p>
                <br />
                <p>
                  A passionate advocate for empowerment, Jennifer is also a
                  sought-after speaker and mentor, known for her ability to
                  inspire others to lead with confidence and purpose. She holds
                  multiple advanced degrees and is deeply committed to helping
                  marginalized voices thrive in the business world. Beyond her
                  professional achievements, Jennifer is a storyteller at heart,
                  driven by the belief that every business has a narrative worth
                  sharing. Through her consultancy, she empowers organizations
                  to not only grow but also to shine as their most authentic
                  selves.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
