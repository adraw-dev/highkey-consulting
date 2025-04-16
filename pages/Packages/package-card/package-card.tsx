"use client";
import Link from "next/link";
import Image from "next/image";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  top?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  features,
  top,
}) => {
  return (
    <>
      <div className="w-full px-4 ">
        <div
          className={`relative z-10 mb-10  overflow-hidden rounded-[10px] border-2 border-stroke ${top ? "bg-[#1A3B3B] text-white" : "bg-white text-black"} px-8 py-10 shadow-pricing dark:border-dark-3  shadow-2xl sm:p-12 lg:px-8 lg:py-10 xl:p-[2rem]`}
        >


          <h2 className="mb-5 text-[42px] font-black text-dark  text-center dark:text-white">
            {title}
          </h2>
          {top && (
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/images/package/star.png"
                alt="Star Icon"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="text-lg font-semibold">Most Popular</span>
            </div>
          )}
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 text-center dark:text-dark-6">
            {description}
          </p>
          <ul className="mb-9 flex flex-col gap-[14px]">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-center">
                {top ? (
                  <Image
                    src="/images/package/icon-peacock-white.svg"
                    alt="Icon Peacock"
                    width={24}
                    height={24}
                    className="mr-4 flex-shrink-0"
                  />
                ) : (
                  <Image
                    src="/images/package/icon-peacock.svg"
                    alt="Icon Peacock"
                    width={24}
                    height={24}
                    className="mr-4 flex-shrink-0"
                  />
                )}

                {feature}
              </li>
            ))}
          </ul>

          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1a3b3b" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#1a3b3b" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
