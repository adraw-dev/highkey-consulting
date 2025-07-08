import Image from "next/image";

const MisionAndValues: React.FC = () => {
  return (
    <section className=" w-full bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] flex flex-col items-center justify-center px-4 py-20">
      {/* Our Mission */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded mr-4">
            {/* Mission Icon */}
            <Image
              src="/images/aboutus/two-squares.svg"
              alt="Quote"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-light">
            Our Mission
          </h2>
        </div>
        <p className="text-white text-center text-lg md:text-2xl max-w-3xl font-light">
          To amplify unheard voices and spark sustainable growth
          <br />
          by weaving equity, creativity, and strategic insight
          <br />
          into every brand story we touch
        </p>
      </div>

      {/* Brand Values */}
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-[#114040] flex items-center justify-center rounded mr-4">
            {/* Values Icon */}
            <Image
              src="/images/navbar/group.svg"
              alt="Quote"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-light">
            Brand Values
          </h2>
        </div>
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-0">
          {/* Value 1 */}
          <div className="flex-1 flex flex-col items-center px-4">
            <h3 className=" text-white text-xl md:text-2xl font-bold mb-2">
              Freedom
            </h3>
            <p className="text-white text-center text-sm md:text-base font-light">
              Ditch the &quot;shoulds&quot;. Your brand thrives when
              it’s unfiltered.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-[#6ECFC6] mx-4"></div>
          {/* Value 2 */}
          <div className="flex-1 flex flex-col items-center px-4">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Authenticity
            </h3>
            <p className="text-white text-center text-sm md:text-base font-light">
              No personas. Just you, amplified. INDIVIDUALITY – Your quirks?
              Your superpower. Let’s unleash them.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px bg-[#6ECFC6] mx-4"></div>
          {/* Value 3 */}
          <div className="flex-1 flex flex-col items-center px-4">
            <h3 className="text-white text-center text-xl md:text-2xl font-bold mb-2">
              Boundless Potential
            </h3>
            <p className="text-white text-center text-sm md:text-base font-light">
              The ceiling? Gone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionAndValues;
