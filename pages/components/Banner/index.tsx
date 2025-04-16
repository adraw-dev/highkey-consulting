"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      id="banner-div"
      className="mx-auto max-w-7xl  py-7 sm:py-10   px-6 lg:px-8 ">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, top: 0 }}
        whileInView={{
          top: 1,
          opacity: 1,
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <Image
          className="absolute -top-20 left-1/3 -z-10 lg:w-10/12 xl:w-9/12  lg:block xl:-top-36 hidden"
          src="/images/banner/snake.svg"
          alt="hero-image"
          width={500}
          height={10}
        />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        {/* COLUMN-1 */}
        <motion.div
          className="w-full"
          initial={{ y: -100 }}
          whileInView={{
            y: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
        >
          {" "}
          <div className="mx-auto sm:mx-10 sm:mt-10  lg:mt-60 xl:mt-80">
            <div className="py-3 text-center lg:text-start">
              <button className="text-primary bg-aqua hover:shadow-xl cursor-context-menu text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider">
                Consulting Agency
              </button>
            </div>
            <div className="py-4 text-center lg:text-start">
              <h1 className="text-6xl lg:text-80xl font-bold  text-white">
                Let’s bring your <br /> vision to life!
              </h1>
            </div>
          </div>
        </motion.div>

        {/* COLUMN-2 */}

        <div className=" lg:-mb-[5rem] lg:ml-2 z-10  hidden lg:block">
          <Image
            src="/images/banner/banner.webp"
            alt="hero-image"
            width={500}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
