import Image from "next/image";

const JenniferInActionSection = () => (
  <section className="bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] flex justify-center  relative w-full mt-20 py-10">
    <Image
      src="/images/navbar/squares.svg"
      alt="hero-image"
      width={155.5335693359375}
      height={168}
      className="absolute left-0 hidden md:block"
    />

    <div className="flex text-center  mx-10  flex-col">
      <div className="flex items-start mt-10md:mt-0 justify-center md:gap-10">
        <Image
          src="/images/navbar/group.svg"
          alt="hero-image"
          width={56}
          height={56}
          className="opacity-10"
        />

        <h2 className="gradient-text text-5xl mt-30 text-white font-bold mb-8 text-center z-10">
          Jennifer in Action
        </h2>
      </div>
      <p className="mt-5 text-2xl text-center font-bold text-white">
        Jennifer Velez is a thought leader, creative, and connector.
      </p>
    </div>
    <Image
      src="/images/navbar/squares.svg"
      alt="hero-image"
      width={155.5335693359375}
      height={168}
      className="absolute right-0 hidden md:block"
    />
  </section>
);

export default JenniferInActionSection;
