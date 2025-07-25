import Link from "next/link";
import Image from "next/image";
import React from "react";

const PickBrain: React.FC = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] h-auto py-8 w-full  flex flex-col justify-center relative">
        <div className="flex items-center  mx-auto justify-between gap-10 ">
          <Image
            src="/images/navbar/group.svg"
            alt="hero-image"
            width={56}
            height={56}
            className="opacity-40"
          />
          <h2 className="gradient-text text-65xl font-bold  text-center z-10">
            Pick my Brain
          </h2>
        </div>
        <div>
          <div className="flex justify-between mt-10 items-center">
            <div className="w-2/6 h-4 mx-auto">
              <Image
                src="/images/package/thinking.png"
                alt="thingking"
                width={500}
                height={450}
                style={{
                  maskImage: "linear-gradient(black 90%, transparent)",
                }}
                className="absolute  hidden md:block md:w-[450px] md:top-40  md:-left-4 lg:w-[500px] lg:top-28 lg:left-30 xl:w-[600px] xl:top-10 xl:left-30  2xl:top-10 2xl:left-40"
              />
            </div>
            <h4 className=" w-full md:w-[60%] lg:w-[57%] xl:w-[58%] 2xl:w-[53%] text-2xl text-white font-bold mb-8 ml  z-10">
              Need a quick, no-fluff strategy chat with someone who gets
              <br /> your brand challenges?
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-100">
        <div className="w-2/6 h-4 hidden md:block"></div>
        <div className="w-full md:w-[60%] lg:w-[63%] xl:w-[63%] 2xl:w-[70%] flex flex-col items-center justify-center">
          <p className=" text-xl mt-12 mb-8 text-justify font-medium px-4 lg:px-[5rem] 2xl:px-[17rem]">
            Sometimes you don’t need a full consulting package—just 50 minutes
            of focused conversation with an experienced strategist.
            <br />
            <br />
            Pick My Brain sessions let you tap directly into Jennifer L. Velez’s
            expertise to troubleshoot, ideate, and clarify next steps on
            anything from brand activations and lead generation to content
            marketing, social media, or defining your target market.
          </p>

          <Link href={"#joinus-section"}>
            <button className="text-sm md:text-xl font-semibold hover:shadow-xl mb-8 bg-darkpurple w-5/6 text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hopurple">
              Let’s connect!
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-4 lg:px-[5rem] 2xl:px-[17rem]">
        <h3 className="text-[#1A3B3B] text-4xl font-bold">How does it work?</h3>
        <p className="text-xl  text-justify font-medium ">
          One of my greatest joys is connecting with others! Founders are
          passionate people with tons of creative ideas. I share a lot of
          resources across my socials but sometimes a business owner wants to
          talk about their own specific needs with another human that “gets it”.
          <br />
          <br />
          If you’re facing a challenge and need support, “PICK MY BRAIN” can
          mean anything. Maybe it’s a conversation about brand activations,
          creating leads, creative ideas to grow your business, content
          marketing, navigating social media or graphic design. Maybe you need
          support identifying your target market.
          <br />
          <br />
          If you’re interested, please send an email request to
          inquiry@JenniferLVelez.com with “Pick Your Brain” as the subject.
          Someone from our team will reach out to you to schedule our one-on-one
          chat which can take place via phone or video conferencing. Before our
          scheduled call, you will receive an invoice for payment.
          <br />
          <br />
          Our time is limited, so we will follow an agenda to make sure we have
          time to address your areas of need. A 50 minute session starts at $150
          and scales based on the size of your company and revenue.
          <br />
          
        </p>
        {/* <Image
          src="/images/aboutus/Jennifer_about_1.jpg"
          alt="Jennifer Velez"
          width={1000}
          height={686}
          className="my-10 mx-auto rounded-3xl"
        /> */}
      </div>
    </div>
  );
};

export default PickBrain;
