import React, { ReactNode } from "react";

export interface CardServicesProps {
  title: ReactNode;
  description: string;
  subtitle: ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<CardServicesProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <div
      className={`bg-[url(/images/services/brand.jpg)] bg-center bg-no-repeat bg-cover  bg-darkblue w-full h-[30rem] lg:h-full  lg:w-[40rem]  pt-12 px-10 sm:px-10 pb-52 md:pb-30 rounded-3xl`}
    >
      <h2 className="text-65xl  font-extrabold text-secondary line-clamp-3 leading-snug mb-5 text-center sm:text-start">
        {title}
      </h2>
      <div className="border-t-2 border-secondary w-full my-4"></div>
      <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
        {subtitle}
      </h3>
      <h5 className="text-offwhite pt-2  text-center sm:text-start">
        {description}
      </h5>
      
    </div>
  );
};

export default ServiceCard;
