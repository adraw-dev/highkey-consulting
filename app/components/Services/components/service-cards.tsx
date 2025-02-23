"use client";
import React, { ReactNode } from "react";

export interface CardServicesProps {
  title: ReactNode;
  description: string;
  subtitle: ReactNode;
  imageUrl: string;
  postionImage?: string;
}

const ServiceCard: React.FC<CardServicesProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  postionImage = "center",
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${postionImage}`,
      }}
      className={`  bg-no-repeat bg-cover  bg-darkblue shadow-xl w-full h-[30rem] lg:h-full lg:w-[40rem] py-auto pt-12 px-10 sm:px-10 pb-52 md:pb-30 rounded-3xl`}
    >
      <h2 className="text-65xl font-extrabold text-white line-clamp-3 leading-snug mb-5 text-center sm:text-start">
        {title}
      </h2>
    </div>
  );
};

export default ServiceCard;
