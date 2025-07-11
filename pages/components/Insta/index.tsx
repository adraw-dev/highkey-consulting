import Image from "next/image";
import Link from "next/link";

const InstaLink = ({ href, imageUrl }: { href: string; imageUrl: string }) => {
  return (
    <Link href={href} className="mx-auto" target="_blank">
      <div className="mx-auto imageContainer h-72">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="h-full bg-cover bg-no-repeat rounded-3xl w-64"
        ></div>
        <button
          className="hidden text-white font-semibold absolute z-10"
          style={{
            top: "45%",
            right: "45%",
          }}
        >
          <Image
            src="/images/insta/linkedin.svg"
            alt="instagram"
            width={36}
            height={36}
          />
        </button>
      </div>
    </Link>
  );
};

const Insta = () => {
  const links = [
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296947593081696256-1f7m/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_1.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296211504071163904-HPzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_2.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7296211504071163904-HPzx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_3.jpg",
    },
    {
      href: "https://www.linkedin.com/posts/jenniferleighvelez_dei-equity-inclusion-activity-7299111558788395008-hqPx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSM8FYBcXZmiL-p3pY1E0RDf5o79pH_eAA",
      imageUrl: "/images/insta/linkedin_4.jpg",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl lg:text-65xl  font-semibold  md:font-bold sm:leading-tight mt-5 text-center text-white">
        Connect with us on LinkedIn
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {links.map((link, index) => (
          <InstaLink key={index} href={link.href} imageUrl={link.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Insta;
