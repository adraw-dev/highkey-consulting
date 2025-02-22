import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 my-2 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/jennifer.jpg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative text-white">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              Be transparent about your brand, its values, and practices.{" "}
            </h2>
            <p className="font-medium text-white text-2xl mt-5 text-center lg:text-start">
              Showcase the human side of your company, highlight real stories,
              and share behind-the-scenes content.
            </p>
            <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Jennifer Velez, CEO of HighKey Consulting
            </p>
          </div>
        </div>
      </div>
      <div id="joinus" className="bottom-0"></div>
    </div>
  );
};

export default Dedicated;
