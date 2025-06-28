"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const API_URL =
  "https://useful-diamond-e8d82e3ac0.strapiapp.com/api/posts?populate=*";

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
            alt="linkdin"
            width={36}
            height={36}
          />
        </button>
      </div>
    </Link>
  );
};

const Insta = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [posts, setPosts] = useState<{ href: string; imageUrl: string }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const formatted = json.data.map((item: any) => ({
          href: item.postURL,
          imageUrl: item.postImage?.url 
        }));
        setPosts(formatted);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mx-auto pt-20 mb-20 bg-[linear-gradient(180deg,_#8d1a81_0%,_#270724_55%,_#191617_62%)] pb-16 md:px lg:px-32 sm:px-6 lg:mb-0">
      <h2 className="text-4xl lg:text-65xl flex justify-center font-semibold md:font-bold sm:leading-tight text-center text-white">
        Connect on LinkedIn
      </h2>

      <div className="mt-10">
        {posts.length === 0 ? (
          <p className="text-white text-center">loading post...</p>
        ) : (
          <Carousel plugins={[plugin.current]} className="px-2 md:px-5 w-full">
            <CarouselContent>
              {posts.map((link, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 2xl:basis-1/4"
                >
                  <InstaLink href={link.href} imageUrl={link.imageUrl} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Insta;
