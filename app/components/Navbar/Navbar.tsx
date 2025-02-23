"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Contactusform from "./Contactus";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  // { name: "Home", href: "/", current: false },
  { name: "About jennifer", href: "/About", current: false },
  { name: "Consulting", href: "/Consulting", current: false },
  { name: "Packages", href: "/Packages", current: false },
  { name: "Testimonial ", href: "/Testimonial", current: false },
  { name: "Blog ", href: "/Blog", current: false },
  { name: "Media Opportunities", href: "/Media", current: false },
  // { name: "Contact Us", href: "/Contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className=" fixed z-50 w-full p-3 md:p-2 lg:px-0 lg:py-4 bg-white shadow-lg">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:mx-72 md:mx-32 sm:justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Link
                  href="/"
                  className="text-2xl sm:text-4xl font-semibold text-black"
                >
                  <Image
                    src="/images/navbar/HIGHKEY-logo-green.png"
                    alt="hero-image"
                    width={200}
                    height={50}
                  />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center  ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks hover:text-black",
                        "px-3 py-4 rounded-md text-lg font-semibold links-navbar" 
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
