import Image from "next/image";

interface ServiceSectionProps {
  title: string;
  description: string;
  offers: string[];
  approach: string;
  imageUrl: string;
  reverse: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  offers,
  approach,
  imageUrl,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} items-center mb-16`}
    >
      <div className=" flex justify-center items-center lg:w-1/2">
        {/* <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        /> */}

        <div className="grid bg-gray-300 rounded-lg h-36 w-36 place-items-center animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-12 h-12 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <h3 className="text-xl font-semibold mb-2">What We Offer:</h3>
        <ul className="list-disc list-inside mb-4">
          {offers?.map((offer, index) => (
            <li key={index} className="mb-2">
              {offer}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
        <p>{approach}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
