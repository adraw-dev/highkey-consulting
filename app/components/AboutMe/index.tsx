import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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
    <div id="aboutus-section" className="w-full bg-lightgrey">
      <div className="mx-auto  max-w-7xl px-4 pt-20 pb-2  lg:px-10 bg-lightgrey">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />

        <div className="flex flex-col gap-16 lg:flex-row px-2 my-16">
          <div className="mt-2 px-5">
            <h2 className="text-center text-aqua text-5xl font-bold tracking-widest">
              ¡HI WE ARE HIGHKEY CONSULTING!
            </h2>
            <div className="flex flex-col  gap-10 mt-10 md: sm:flex-row">
              <div>
                <p className="text-justify mt-10 text-lg  font-bold">
                  At HighKey Consulting, we’re more than a consultancy—we’re
                  your dedicated partners in success. Led by our visionary CEO,
                  Jennifer Velez, we blend inclusive leadership with
                  ethnographic insights to craft strategies that unlock your
                  business’s full potential. <br />
                  <br /> From empowering women-owned businesses in South Bay to
                  elevating established brands, we believe in authenticity,
                  collaboration, and limitless growth. <br /> <br /> When you
                  work with us, you gain a supportive team that invests in your
                  success as if it were our own.
                </p>
                <br />
                <p className="text-justify  text-xl  font-extrabold">
                  🚀 Ready to take your business to the next level?
                </p>
                <br />
                <div className="my-7 flex justify-center  text-center lg:text-start">
                  <Link href={"#joinus"}>
                    <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-darkpurple text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hopurple">
                      Let’s connect!
                    </button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/aboutus/197A4382.png"
                alt="man-icon"
                width={416}
                height={530}
                className="mx-auto md:mx-0 rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="services-section" className="bottom-0"></div>
    </div>
  );
};

export default AboutMe;
