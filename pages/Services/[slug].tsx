import Head from "next/head";
import Image from "next/image";
import React, { use, useEffect } from "react";
import { useRouter } from "next/router";
import { Service, servicesInfo } from "../../constants/service.const";
import ServicePage from "./service-page/service-page";
import Header from "../components/Header";

const ConsultingPage: React.FC = () => {
  const router = useRouter();
  const [service, setService] = React.useState<Service>({
    slug: "",
    title: "",
    description: "",
    offers: [],
    approach: "",
    imageUrl: "",
  });
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      const { slug } = router.query;
      const filteredService = servicesInfo.find(
        (service) => service.slug === slug
      );
      if (filteredService) {
        setService(filteredService);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchService();
  }, [router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/hk.png" sizes="48x48" />
      </Head>
      <Header title={service.title} />

      <div className="flex justify-center items-center  bg-gray-100 ">
        <div className="mx-auto  px-6 lg:px-[5rem] 2xl:px-[17rem] pt-5  ">
          <button
            onClick={() => router.back()}
            className="mb-4 px-4  font-bold bg-blue-500 text-aqua rounded hover:bg-blue-600"
          >
            <Image
              src="/images/services/arrow-left-solid.svg"
              className="inline-block mr-2 text-aqua"
              alt="arroileft"
              width={14}
              height={14}
            />
            Go Back
          </button>
          {service && (
            <ServicePage
              slug={service.slug}
              title={service.title}
              description={service.description}
              offers={service.offers}
              approach={service.approach}
              imageUrl={service.imageUrl}
              positionImage={service?.positionImage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;
