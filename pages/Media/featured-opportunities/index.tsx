import Image from "next/image";

interface IconComponentProps {
  icon: string;
  title: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col w-52 items-center text-center p-4 bg-gray-50 transition-shadow duration-300">
      <Image
        src={`/images/media/${icon}`}
        alt={title}
        width={110}
        height={110}
      />
      <p className="text-sm font-semibold mt-2 text-gray-800">{title}</p>
    </div>
  );
};

export default function FeaturedOpportunities() {
  return (
    <section className="flex justify-end lg:justify-center px-2 lg:px-24 py-10 items-center bg-gray-100 ">
      <div className=" mx-auto text-center">
        <div className="w-full flex flex-col lg:flex-row items-start justify-end md:justify-center gap-10">
          <div className="w-full">
            <Image
              src="/images/media/Jennifer-walk-2.png" // Replace with your own image path
              alt="Jennifer"
              width={500}
              height={300}
              className="hidden md:block absolute -ml-40 md:-ml-48 lg:-ml-48 xl:-ml-56"
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              FEATURED OPPORTUNITIES
            </h2>
            <div className="h-20   flex items-center justify-center bg-[linear-gradient(134.66deg,_#2C0728_6.35%,_#8D1A81_95.93%)] text-white pl-6 md:pl-24 lg:pl-14 pr-6 py-3  rounded-full text-sm md:text-base w-full">
              <p className="">
                From keynote stages to runway lights, Jennifer brings voice,
                presence, and perspective.
              </p>
            </div>

            <div className="w-full mt-10 ml-0 sm:pl-8 flex flex-col items-center gap-8 lg:ml-40 lg:w-2/3">
              <div className="">
                <IconComponent
                  icon="icono_microfono.svg"
                  title="Keynote & Panel Speaking"
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-56">
                <IconComponent
                  icon="vineta2.svg"
                  title="Media Features & Publications"
                />
                <IconComponent
                  icon="vineta.svg"
                  title="Product Ambassador & Retail Modeling"
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-56">
                <IconComponent
                  icon="icono_hk2.svg"
                  title="Ethnographic Research & Interviews"
                />
                <IconComponent
                  icon="icono_hk.svg"
                  title="Podcast / Talk-Show Guest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
