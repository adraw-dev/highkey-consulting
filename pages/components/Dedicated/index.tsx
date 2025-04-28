"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 my-2 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <motion.div
              className="w-full"
              initial={{ opacity:0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/dedicated/jennifer.jpg"
                alt="man-icon"
                width={416}
                height={530}
                className="mx-auto md:mx-0 rounded-lg"
              />
            </motion.div>
          </div>

          {/* COLUMN-2 */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
          >
            {" "}
            <div className="relative text-white">
              <h2 className="text-4xl lg:text-65xl pt-4  font-semibold  md:font-bold sm:leading-tight mt-5 text-center lg:text-start">
                Be transparent about who you are, what your brand is, its
                values, and practices.{" "}
              </h2>
              <p className="font-thin text-white text-2xl mt-5 text-center lg:text-start">
                Showcase the human side of your company, highlight real stories,
                and share behind the scenes content. Allow people to connect
                with you so they feel like they can connect to your mission.
              </p>
              <p className="text-2xl font-medium md:font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
                {" "}
                Jennifer Velez, CEO of HighKey Consulting
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="joinus-section" className="bottom-0"></div>
    </div>
  );
};

export default Dedicated;
