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
              <li key={index} className="flex items-center ">
                <Image
                  src="/images/package/peacock.svg"
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
