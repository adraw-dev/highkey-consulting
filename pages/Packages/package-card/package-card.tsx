"use client";
import Link from "next/link";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
}



const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <>
      <div className="w-full px-4 ">
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
         
          <h2 className="mb-5 text-[42px] font-black text-dark  text-center dark:text-white">
            {title}
          
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <ul className="mb-9 flex flex-col gap-[14px]">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-2 h-10 w-10 font-black text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
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
