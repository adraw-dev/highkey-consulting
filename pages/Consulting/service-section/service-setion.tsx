import Link from "next/link";
interface ServiceSectionProps {
  title: string;
  description: string;
  offers?: string[];
  approach?: string;
  imageUrl: string;
  url?: string;
  reverse: boolean;
  postionImage?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  offers,
  approach,
  imageUrl,
  reverse,
  postionImage = "center",
  url,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "lg:flex-row-reverse " : ""} items-center mb-16`}
    >
      <div className=" flex justify-center items-center mb-5 md:mb-0 md:ml-8 w-full md:w-1/2">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${postionImage}`,
          }}
          className={`  bg-no-repeat bg-cover h-[20rem] w-full rounded-md shadow-xl`}
        ></div>
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>

        {offers && offers.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">What We Offer:</h3>
            <ul className="list-disc list-inside mb-4">
              {offers?.map((offer, index) => (
                <li key={index} className="mb-2">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        )}
        {approach && (
          <>
            <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
            <p>{approach}</p>
          </>
        )}
        <Link href={`/${url}`}>
          <button className="mx-auto text-sm md:text-xl font-semibold hover:shadow-xl bg-darkpurple text-white  px-6 py-3  rounded-full hover:bg-hopurple">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
