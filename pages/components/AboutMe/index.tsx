"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface datatype {
  heading: string;
  imgSrc: string;
  paragraph: string;
  link: string;
  url: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "About us.",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
    url: "/aboutme",
  },
  {
    heading: "Services.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
    url: "/#",
  },
  {
    heading: "Our Works.",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem",
    link: "Learn more",
    url: "/#",
  },
];

const AboutMe = () => {
  return (
    <div id="aboutus-section" className="w-full bg-white z-10">
      <div className="mx-auto pt-2 max-w-7xl px-4 lg:pt-10 pb-2  lg:px-10  bg-white">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />

        <div className="flex flex-col gap-16  lg:flex-row px-2 my-16">
          <div className="mt-2 px-5">
            <Image
              className="mx-auto"
              src="/images/navbar/HIGHKEY-logo-green.png"
              alt="hero-image"
              width={300}
              height={50}
            />
            <div className="flex flex-col  gap-10   md:flex-row">
              <div
                id="text-about"
                className="flex flex-col flex-grow clear-left md:w-[40rem] lg:w-full "
                style={{ clear: "left" }}
              >
                <p className="text-left mt-[10%] text-lg  md:font-bold">
                  At highkey consulting, we’re more than a consultancy -
                  we&apos;re dedicated partners in success. Led by visionary
                  founder, Jennifer L. Velez (she/her), we blend inclusive
                  leadership with ethnographic insights and market research to
                  craft strategies that unlock full potential.
                  <br />
                  <br /> From empowering marginalized business owners in the
                  South Bay of Los Angeles and Desert Communities to elevating
                  established brands across the world, we prioritize creativity,
                  authenticity, innovative thinking, and strategic action with a
                  values based approach.
                  <br /> <br />
                  When you work with us, you gain a supportive team that invests
                  in your success as if it were our own.
                  <br />
                  <br />
                </p>
                <div className="justify-center hidden md:flex text-center lg:text-start">
                  <Link href={"#joinus-section"}>
                    <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-darkpurple text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hopurple">
                      Let’s connect!
                    </button>
                  </Link>
                </div>
              </div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/aboutus/Jennifer_aboutUS.jpg"
                  alt="Jennifer"
                  width={516}
                  height={730}
                  className="mx-auto md:mx-0 h-auto  md:mt-[10%] lg:mt-[10%] rounded-xl shadow-xl"
                />
              </motion.div>
              <div className="flexjustify-center  md:hidden text-center lg:text-start">
                <Link href={"#joinus-section"}>
                  <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-darkpurple text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hopurple">
                    Let’s connect!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services-section" className="bottom-0"></div>
    </div>
  );
};

export default AboutMe;
