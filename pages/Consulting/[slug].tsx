import Head from "next/head";
import Image from "next/image";
import React, { use, useEffect } from "react";
import { useRouter } from "next/router";
import { Service, servicesInfo } from "./service.const";
import ServicePage from "./service-page/service-page";

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
  useEffect(() => {
    fetchService();
  }, [router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>

      <div className="bg-gray-100 min-h-screen ">
        <div className="mx-auto  px-6 lg:px-[5rem] xl:px-[12rem]  pt-20 lg:pt-28 pb-16   mt-10">
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
