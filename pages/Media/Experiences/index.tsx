import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const mediaItems = [
  {
    url: "https://www.linkedin.com/posts/jenniferleighvelez_dei-fasion-art-activity-7165787463850950656-Edpj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAApJ60oBqseiXEdFu5dVB_HEWSocHf7Fhzg",
    title: "Forever 21 Black History Month event",
    img: "blackhistory.jpg",
  },
  {
    url: "https://www.youtube.com/watch?v=e5vblAyUqE4",
    title: "Interview with Compton Cowboys…",
    img: "cowboys.png",
  },
  {
    url: "https://www.linkedin.com/posts/opal-financial-group_jennifer-velez-shared-some-words-about-her-activity-7207013949056139265-ImRs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAApJ60oBqseiXEdFu5dVB_HEWSocHf7Fhzg",
    title: "Summer L&D+DEI Executive Summit.",
    img: "opal.png",
  },
];

const Experiences = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="px-10 lg:px-28 py-10">
        <h4 className="text-2xl font-semibold text-center">
          With experience spanning international keynotes, DEI research, fashion
          modeling, and <br />
          cultural storytelling, she represents a bold, intersectional voice in
          today&apos;s media landscape.
        </h4>
      </div>
      <div className="bg-[#95B1AE]/20 w-full py-10 h-auto">
        <Carousel plugins={[plugin.current]} className="px-2 md:px-5 w-full">
          <CarouselContent className="-ml-4">
            {mediaItems.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="break-keep md:basis-1/2 lg:basis-1/3 2xl:basis-1/3"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col justify-center gap-6 w-full items-center">
                      <div className="relative w-full h-[280px] flex-shrink-0">
                        <Image
                          alt={item.title}
                          src={`/images/media/${item.img}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 80vw, 300px"
                        />
                      </div>
                      <h4 className="text-black text-3xl font-semibold text-center">
                        {item.title}
                      </h4>
                    </div>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col mx-auto lg:w-[70%] 2xl:w-[55%] mt-10 justify-center items-center">
        <div className="text-start w-[80%]">
          <h4 className="  mb-10 text-2xl font-bold text-darkpurple">
            Other Participations
          </h4>
        </div>
        {[
          "Opal Group DEI Conference Keynote Experience: Keynote topic- How Can Inclusivity Unlock Innovation?",
          "Black Fashion Week Fashion Show",
          "Keynote Speaker, Panelist and Presenter at Workplace Inclusion and ERGs, Egypt, 2019",
          "The Ally Co.’s The Leaderful Podcast, Los Angeles, 2023",
          "Black History Month interview with Photographer + Activist, Henry R. Jones II, Los Angeles, 2046",
          "Featured in Forbes",
        ].map((text, idx) => (
          <li key={idx} className="flex items-center w-[65%]  mb-4">
            <Image
              src="/images/package/peacock.svg"
              alt="Check Icon"
              width={46}
              height={46}
              className="mr-2"
            />
            {text}
          </li>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
