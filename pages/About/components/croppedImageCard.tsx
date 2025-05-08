// components/CroppedImageCard.js
import Image from "next/image";

export default function CroppedImageCard() {
  return (
    <div className="relative w-[400px]  flex flex-col items-start">
      {/* Imagen recortada */}
      <div
        className="w-full h-[400px] overflow-hidden bg-gray-200 relative z-0"
        style={{
          clipPath:
            "polygon(26% 0, 70% 0%, 100% 0, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 24%",
        }}
      >
        <Image
          src="/images/aboutus/Jennifer-(67 of 96).jpg"
          alt="Cropped People"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Tarjeta fuera del contenedor de la imagen */}
      <div className="absolute bottom-[-16px] -left-20 md:bottom-[-86px] md:left-0 lg:bottom-[-86px] lg:-left-28 z-10 bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] text-start text-white px-4 pt-3 pb-7 w-44 rounded-md shadow-lg text-sm font-sans">
        <div className="flex items-center font-bold text-lg">
          81%
          <span className="bg-darkpurple text-white text-center h-5 w-5 pb-6  rounded-full text-base ml-5">
            ↑
          </span>
        </div>
        <p className="mt-1 leading-tight">
          Average premium shoppers are willing to pay when they feel represented
          and trust a brand
        </p>
      </div>
    </div>
  );
}
