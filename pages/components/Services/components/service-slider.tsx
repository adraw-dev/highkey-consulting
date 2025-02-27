"use client";
import { useState } from "react";
import ServiceCard, { CardServicesProps } from "./service-cards";
const services: CardServicesProps[] = [
  {
    title: "BELIEFS",
    subtitle: (
      <div>
        {" "}
        Honesty{" "}
        <span className="text-grey">and hard work are our beliefs.</span>
      </div>
    ),
    description: "Honesty and hard work are our beliefs.",
    imageUrl: "/images/services/beliefs.svg",
  },
  {
    title: "BUILD",
    subtitle: (
      <div>
        {" "}
        Honesty{" "}
        <span className="text-grey">and hard work are our beliefs.</span>
      </div>
    ),
    description: "Build that great idea that you have.",
    imageUrl: "/images/services/build.svg",
  },
  {
    title: "BUILD",
    subtitle: (
      <div>
        {" "}
        Honesty{" "}
        <span className="text-grey">and hard work are our beliefs.</span>
      </div>
    ),
    description: "Build that great idea that you have.",
    imageUrl: "/images/services/build.svg",
  },
  {
    title: "BUILD",
    subtitle: (
      <div>
        {" "}
        Honesty{" "}
        <span className="text-grey">and hard work are our beliefs.</span>
      </div>
    ),
    description: "Build that great idea that you have.",
    imageUrl: "/images/services/build.svg",
  },
  {
    title: "BUILD",
    subtitle: (
      <div>
        {" "}
        Honesty{" "}
        <span className="text-grey">and hard work are our beliefs.</span>
      </div>
    ),
    description: "Build that great idea that you have.",
    imageUrl: "/images/services/build.svg",
  },
];

const ImageSlider = () => {

const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };
  if (currentIndex > services.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
    console.log("hi");
  }

  return (
    <>
      <div className="mt-2">
        <div className="w-11/12 ">
          <div className="relative">
            <div className="flex space-x-4">
              {services
                .slice(currentIndex, currentIndex + 3)
                .map((card, index) => (
                  <ServiceCard key={index} {...card} />

                    // <div className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                    //   <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.imageUrl} alt="Card" />
                    //   <h3 className="text-lg font-bold">{card.title}</h3>
                    //   <p className="text-gray-500">{card.description}</p>
                    // </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
              <button
                className="w-6 h-6 rounded-full bg-gray-300  relative right-4"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="w-6 h-6 rounded-full bg-gray-300 relative left-10"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
