import Image from "next/image";

const videos = [{ url: "", title: "", img: "" }];

const Experiences = () => (
  <section>
    <div className="px-10 lg:px-28 py-10">
      <h4 className="text-2xl font-semibold">
        With experience spanning international keynotes, DEI research, fashion
        modeling, and cultural storytelling, she represents a bold, interdival
        voice in today&#39;s media landscape.{" "}
      </h4>
    </div>
    {/* <div className="bg-[#95B1AE]/20 w-full py-20 h-52"></div> */}

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

export default Experiences;
