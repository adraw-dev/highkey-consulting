import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import CroppedImageCard from "./components/croppedImageCard";

const services: string[] = [
  "COMMUNICATIONS STRATEGY",
  "MARKETING ",
  "GRAPHIC DESIGN ",
  "BRAND ACTIVATIONS ",
  "BRAND STRATEGY ",
  "PERSONAL BRANDING ",
  "DEI",
  "GEN Z",
];

const AboutPage: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/hk.png" sizes="48x48" />
      </Head>

      <Header title="highkey consulting" />

      <div className="flex flex-col md:flex-row justify-center items-center  px-10 pt-20 pb-10  bg-white">
        <Image
          src="/images/aboutus/goup-gray.svg"
          alt="Jennifer"
          width={265}
          height={265}
          className="absolute top-60 w-[30%] lg:w-[20%] left-[40%] md:top-80  md:left-[60%] opacity-50"
        />
        <div className="md:w-1/2 mx-auto flex flex-col items-center text-start z-20">
          <h2 className="text-5xl font-bold text-center text-darkpurple mb-6">
            Authentic, values-first
            <br />
            storytelling that turns
            <br />
            purpose into profit.
          </h2>
          {/* -------------------------------------------------------------------------------------------------- */}
          <div className="flex  justify-center gap-4 mt-10 mb-6">
            <div className="w-20">
              <Image
                src="/images/aboutus/target.png"
                alt="Jennifer"
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
                alt="Jennifer"
                width={73}
                height={71}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-bold">
                DEI-Powered Brand Experiences
              </h4>
              <p className="text-justify">
                In the U.S., 81 % of consumers refuse to buy from brands they
                don’t trust—and trust is built on inclusion and authenticity.
                Our DEI lens ensures every touchpoint reflects your values,
                converting credibility into revenue.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
        </div>
        <div className="flex justify-end w-[100%]  md:justify-center md:w-[50%]">
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
          highkey Story Showcase
        </h3>

        <p className="text-center  text-lg px-10 md:px-[20%] mb-6">
          Experience how purpose-driven strategy, inclusive storytelling, and
          bold design converge to elevate brands. In this short reel, Jennifer
          walks you through our proven framework for turning authentic
          narratives into measurable growth—and shows why your story is your
          strongest asset.
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
      <div className="flex h-auto py-10 px-10 w-full flex-wrap justify-center bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] items-center mb-10">
        <Carousel plugins={[plugin.current]} className="px-2 md:px-5 w-full">
          <CarouselContent>
            {services.map((service, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="break-keep md:basis-1/2 lg:basis-1/2 2xl:basis-1/3"
                >
                  <div className="flex justify-center gap-6 items-center">
                    <h4 className="text-white text-3xl font-semibold">
                      {service}
                    </h4>
                    <ArrowRight size={48} color="#8D1A81" />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ----------------------------------------------------------------------------------------- */}
      <div className="px-8 mb-10 flex flex-col md:flex-row justify-between gap-10 lg:justify-around ">
        <div className="flex flex-col items-center lg:items-start lg:ml-20">
          <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8D1A81] to-[#2C0728]">
            Our Founder
          </h3>
          <Image
            src="/images/aboutus/Jennifer_aboutUS.jpg"
            alt="Jennifer"
            width={265}
            height={265}
            className="rounded-lg mt-10 mb-0"
          />
        </div>
        <div className="text-justify mt-10 md:mt-24 text-lg w-full md:w-[50%]">
          <div className="relative">
            <p className="relative before:content-[''] before:absolute before:top-[-2rem] before:right-[-20px] before:w-[40px] before:h-[40px] before:bg-[url('/images/aboutus/two-squares.svg')] before:bg-contain before:bg-no-repeat ">
              Jennifer is the visionary founder of a forward-thinking
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
              className="absolute md:hidden top-1/2 left-1/4 rotate-180 transform translate-x-[0%] opacity-5 translate-y-1/3 "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around  gap-10 lg:gap-44 mt-10  px-10 lg:px-40 mb-10">
        <div className="w-full lg:w-[50%] h-auto pt-10 pb-20 md:pb-5 px-5 md:px-10 rounded-lg bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-white relative before:content-[''] before:absolute before:bottom-[-0rem] before:right-[-0rem] before:w-[60px] before:h-[60px] before:bg-[url('/images/aboutus/two-squares.svg')] before:bg-contain before:bg-no-repeat">
          <h4 className="text-4xl font-bold mb-10">Our Mission</h4>
          <p>
            To amplify unheard voices and spark sustainable growth by weaving
            equity, creativity, and strategic insight into every brand story we
            touch.
          </p>
        </div>
        <div className="w-full lg:w-[50%]  h-auto   pt-10 pb-20 md:pb-5 px-10  rounded-lg bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-white relative before:content-[''] before:absolute before:bottom-[-0rem] before:right-[-0rem] before:w-[60px] before:h-[60px] before:bg-[url('/images/navbar/group.svg')] before:bg-contain before:bg-no-repeat">
          <h4 className="text-4xl font-bold mb-10">Brand Values </h4>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">FREEDOM</h5>
            <p>
              Ditch the &quot;shoulds&quot;. Your brand thrives when
              it’s unfiltered.
            </p>
            <div className="w-full h-[1px] bg-[#2D4C4C] my-6"></div>
          </div>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">AUTHENTICITY</h5>
            <p>
              No personas. Just you, amplified. INDIVIDUALITY – Your quirks?
              Your superpower. Let’s unleash them.
            </p>
            <div className="w-full h-[1px] bg-[#2D4C4C] my-6"></div>
          </div>
          <div className="mb-5">
            <h5 className="text-lg font-semibold">BOUNDLESS POTENTIAL</h5>
            <p>The ceiling? Gone.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
