import Image from "next/image";

const Banner = () => {
  return (
    <div
      id="banner-div"
      className="mx-auto max-w-7xl my-3 py-7 sm:py-10 lg:mt-28  px-6 lg:px-8 "
    >
      <Image
        className="absolute -top-36 left-1/3 -z-10 w-2/3 lg:block hidden"
        src="/images/banner/snake.svg"
        alt="hero-image"
        width={500}
        height={10}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0 lg:mt-56">
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

        {/* COLUMN-2 */}

        <div className=" lg:-m-[7rem] lg:ml-2  hidden lg:block">
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
