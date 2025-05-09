import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import CroppedImageCard from "./components/croppedImageCard";
import { ArrowRight } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <Header title="About Us" />

      <div className="flex flex-col md:flex-row justify-center items-center  px-10 pt-20 pb-10  bg-white">
        <Image
          src="/images/aboutus/goup-gray.svg"
          alt="Jennifer Velez"
          width={265}
          height={265}
          className="absolute top-60 left-[40%] md:top-80  md:left-[60%] opacity-50"
        />
        <div className="md:w-1/2 mx-auto flex flex-col items-center text-start z-20">
          <h2 className="text-5xl font-bold text-darkpurple mb-6">
            Authentic, values-first
            <br /> storytelling that turns
            <br /> purpose into profit
          </h2>
          {/* -------------------------------------------------------------------------------------------------- */}
          <div className="flex  justify-center gap-4 mt-10 mb-6">
            <div className="w-20">
              <Image
                src="/images/aboutus/target.png"
                alt="Jennifer Velez"
                width={73}
                height={71}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-bold">
                Values-Led Communication Strategy
              </h4>
              <p className="text-justify">
                We uncover the heart of your story and translate it into
                consistent, cross-channel messaging that earns trust and fuels
                growth.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="flex justify-center gap-4 mt-10 mb-6">
            <div className="w-20">
              <Image
                src="/images/aboutus/comunication.png"
                alt="Jennifer Velez"
                width={73}
                height={71}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-bold">
                Values-Led Communication Strategy
              </h4>
              <p className="text-justify">
                In the U.S., 81 % of consumers refuse to buy from brands they
                don’t trust—and trust is built on inclusion and authenticity.
              </p>

              <p className="text-justify mt-5">
                Our DEI lens ensures every touchpoint reflects your values,
                converting credibility into revenue.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
        </div>
        <div className="flex justify-end w-[70%] md:justify-center md:w-[50%]">
          <CroppedImageCard />
        </div>

        {/* <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          > */}
      </div>

      <div className=" mb-10">
        <h3 className="text-4xl font-bold  text-center mt-10 mb-6">
          High-Key Story Showcase
        </h3>

        <p className="text-center  text-lg px-10 md:px-[20%] mb-6">
          Experience how purpose-driven strategy, inclusive storytelling, and
          bold design converge to elevate small, women-owned brands. In this
          short reel, Jennifer L. Velez walks you through our proven framework
          for turning authentic narratives into measurable growth—and shows why
          your story is your strongest asset.
        </p>

        <div className="w-full">
          <video
            src="https://ik.imagekit.io/ikmedia/example_video.mp4"
            className="w-full h-[400px] md:h-[600px] rounded-lg"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------ */}
      <div className="flex h-auto py-10 w-full flex-wrap justify-center bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] items-center mb-10">
        <h4 className="text-white text-4xl font-semibold">Marketing</h4>
        <ArrowRight size={48} color="#8D1A81" />
        <h4 className="text-white text-4xl font-semibold">
          communications strategy
        </h4>
        <ArrowRight size={48} color="#8D1A81" />
        <h4 className="text-white text-4xl font-semibold">Graphic Design</h4>
        <ArrowRight size={48} color="#8D1A81" />
        <h4 className="text-white text-4xl font-semibold">DEI</h4>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="px-20 mb-10 flex flex-col md:flex-row justify-between gap-10 lg:justify-around ">
        <div className="flex flex-col items-center lg:items-start ml-20">
          <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8D1A81] to-[#2C0728]">
            Our Founder
          </h3>
          <Image
            src="/images/aboutus/Jennifer_aboutUS.jpg"
            alt="Jennifer Velez"
            width={265}
            height={265}
            className="rounded-lg mt-10 mb-4"
          />
        </div>
        <div className="text-justify mt-24 text-lg w-full md:w-[50%]">
          <div className="relative">
            <p className="relative before:content-[''] before:absolute before:top-[-2rem] before:right-[-50px] before:w-[40px] before:h-[40px] before:bg-[url('/images/aboutus/two-squares.svg')] before:bg-contain before:bg-no-repeat ">
              Jennifer Velez is the visionary founder of a forward-thinking
              business consultancy that blends professionalism with a touch of
              feminine strength. With a career dedicated to empowering
              organizations and people, Jennifer has mastered the art of
              balancing authority with approachability, creating a space where
              businesses feel both supported and inspired to reach new heights.
              With a background in ethnographic research, her consultancy is
              built on the belief that every organization has a unique story to
              tell, and she takes a creative, authentic, and values-based
              approach to help bring those stories to life. Though she works for
              a large Corporation, her passion is small woman-owned businesses
              in the South Bay of Los Angeles.
            </p>
            <Image
              src="/images/aboutus/squares-purple.svg"
              alt="Quote"
              width={200}
              height={200}
              className="absolute md:hidden top-1/2 left-1/2 rotate-180 transform translate-x-[0%] opacity-5 translate-y-1/3 "
            />
          </div>

          <div className="relative">
            <p className="mt-4 relative z-10">
              Jennifer’s expertise lies in helping businesses uncover their true
              potential through strategic growth, innovative thinking, and
              purpose-driven leadership. Her consultancy’s brand—reflected in
              its logo, which evokes freedom, individuality, and boundless
              potential—mirrors her commitment to helping clients break free
              from limitations and embrace their unique identity. Whether
              guiding startups, non-profits or established enterprises,
              Jennifer’s tailored strategies are designed to foster resilience,
              authenticity, and sustainable success.
            </p>
            <Image
              src="/images/navbar/group.svg"
              alt="Quote"
              width={200}
              height={200}
              className="absolute md:hidden top-1/2 left-1/2 transform -translate-x-[90%] translate-y-[90%] opacity-10"
            />
          </div>
          <p className="mt-4">
            A passionate advocate for empowerment, Jennifer is also a
            sought-after speaker and mentor, known for her ability to inspire
            others to lead with confidence and purpose. She holds multiple
            advanced degrees and is deeply committed to helping marginalized
            voices thrive in the business world. Beyond her professional
            achievements, Jennifer is a storyteller at heart, driven by the
            belief that every business has a narrative worth sharing. Through
            her consultancy, she empowers organizations to not only grow but
            also to shine as their most authentic selves.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around  gap-10 lg:gap-44 mt-10  px-10 lg:px-40 mb-10">
        <div className="w-full lg:w-[45%] h-auto pt-10 pb-20 md:pb-5 px-5 md:px-10 rounded-lg bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-white relative before:content-[''] before:absolute before:bottom-[-0rem] before:right-[-0rem] before:w-[60px] before:h-[60px] before:bg-[url('/images/aboutus/two-squares.svg')] before:bg-contain before:bg-no-repeat">
          <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
          <p>
            To amplify unheard voices and spark sustainable growth by weaving
            equity, creativity, and strategic insight into every brand story we
            touch.
          </p>
        </div>
        <div className="w-full lg:w-[60%]  h-auto   pt-10 pb-20 md:pb-5 px-10  rounded-lg bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-white relative before:content-[''] before:absolute before:bottom-[-0rem] before:right-[-0rem] before:w-[60px] before:h-[60px] before:bg-[url('/images/navbar/group.svg')] before:bg-contain before:bg-no-repeat">
          <h4 className="text-2xl font-bold mb-4">Our Mission </h4>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">
              Deliver Values-Driven Brand Strategy
            </h5>
            <p>
              Craft clear, consistent messaging that earns trust and drives
              measurable growth
            </p>
            <div className="w-full h-[1px] bg-[#2D4C4C] my-6"></div>
          </div>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">
              Champion DEI at Every Touchpoint
            </h5>

            <div className="w-full h-[1px] bg-[#2D4C4C] my-6"></div>
          </div>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">
              Equip Leaders for Purpose-Powered Success
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
