import Image from "next/image";
import Link from "next/link";

const Insta = () => {
  return (
    <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="mx-auto imageContainer h-72">
    
          <div className="bg-[url(/images/insta/linkedin_1.jpg)]  h-full bg-cover  bg-no-repeat rounded-3xl w-64"></div>
          <Link
            href={
              "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296947593081696256-1f7m/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA"
            }
            target="_blank"
          >
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/insta/linkedin.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
  
          <div className="bg-[url(/images/insta/linkedin_2.jpg)]  h-full bg-cover  bg-no-repeat rounded-3xl w-64"></div>
          <Link
            href={
              "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296211504071163904-HPzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA"
            }
            target="_blank"
          >
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/insta/linkedin.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
          <div className="bg-[url(/images/insta/linkedin_3.jpg)]  h-full bg-cover  bg-no-repeat rounded-3xl w-64"></div>
          {/* <Image src="/images/insta/insta3.jpg" width={306} height={306} alt="instaThree" className=" object-scale-down max-h-ful  rounded-3xl" /> */}
          <Link
            href={"https://www.instagram.com/p/DD3LFLmvFg1/"}
            target="_blank"
          >
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/insta/linkedin.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        <div className="mx-auto imageContainer">
     
          <div className="bg-[url(/images/insta/linkedin_4.jpg)]  h-full bg-cover  bg-no-repeat rounded-3xl w-64"></div>
          <Link
            href={"https://www.instagram.com/p/DFgR1G2zxv6/"}
            target="_blank"
          >
            <button
              className="hidden text-white font-semibold absolute z-10"
              style={{
                top: "45%",
                right: "45%",
              }}
            >
              <Image
                src="/images/insta/linkedin.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Insta;
