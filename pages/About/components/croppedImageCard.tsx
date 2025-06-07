// components/CroppedImageCard.js
import Image from "next/image";

export default function CroppedImageCard() {
  return (
    <>
      <div className=" flex flex-col items-center gap-5 md:hidden w-full ">
        <Image
          src="/images/aboutus/Jennifer-about.jpg"
          className="w-full"
          alt="Cropped People"
          width={700}
          height={300}
        />
        <div className="  bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-start text-white px-4 pt-3 pb-7 w-56 rounded-md shadow-lg text-sm font-sans">
          <div className="flex items-center font-bold text-lg">
            33%
            <span className="bg-darkpurple text-white text-center h-5 w-5 pb-6  rounded-full text-base ml-5">
              ↑
            </span>
          </div>
          <p className="mt-1 leading-tight">
            Strong brand consistency, linked with authenticity, can lead to an
            average revenue increase of 33%.
          </p>
        </div>
      </div>
      <div className="hidden md:flex relative w-full lg:w-[550px] flex-col items-start">
        {/* Imagen recortada */}
        <div
          className="w-full h-[400px] overflow-hidden bg-gray-200 relative z-0"
          style={{
            clipPath: "polygon(79% 0, 100% 29%, 100% 100%, 0 100%, 0 0)",
          }}
        >
          <Image
            src="/images/aboutus/Jennifer-about.jpg"
            alt="Cropped People"
            fill
            objectFit="contain"
          />
        </div>

        {/* Tarjeta fuera del contenedor de la imagen */}
        <div className=" absolute  bottom-[-16px] -left-20 md:bottom-[-86px] md:left-0 lg:bottom-[-86px] lg:-left-28 z-10 bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-start text-white px-4 pt-3 pb-7 w-44 rounded-md shadow-lg text-sm font-sans">
          <div className="flex items-center font-bold text-lg">
            33%
            <span className="bg-darkpurple text-white text-center h-5 w-5 pb-6  rounded-full text-base ml-5">
              ↑
            </span>
          </div>
          <p className="mt-1 leading-tight">
            Strong brand consistency, linked with authenticity, can lead to an
            average revenue increase of 33%.
          </p>
        </div>
      </div>
    </>
  );
}
