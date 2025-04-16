"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

export interface CardServicesProps {
  title: ReactNode;
  description?: string;
  subtitle?: ReactNode;
  imageUrl: string;
  postionImage?: string;
  url?: string;
}

const ServiceCard: React.FC<CardServicesProps> = ({
  title,
  imageUrl,
  postionImage = "center",
  url = "/",
}) => {
  return (
    <Link href={url}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `${postionImage}`,
        }}
        className={`  bg-no-repeat bg-cover  cursor-pointer max-w-2xl mx-10 bg-darkblue shadow-xl w-full h-[20rem]  lg:w-full xl:h-[20rem] xl:w-full mr-10 py-auto pt-12 px-2 sm:px-10 pb-52 md:pb-30 rounded-3xl`}
      >
        <h2 className="text-4xl lg:text-52xl font-extrabold text-white line-clamp-3 leading-snug mb-5 text-start sm:text-start">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ServiceCard;
