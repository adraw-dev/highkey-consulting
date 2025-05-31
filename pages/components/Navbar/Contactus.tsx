"use client";
import { useOpenContext } from "@/context/open.context";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState, FormEvent } from "react";
import { toast } from "sonner";

const Contactusform = () => {
  const { isOpen, setIsOpen } = useOpenContext();
  const [isLoading, setIsLoading] = useState(false);

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    service: "COMMUNICATIONS STRATEGY",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  // FORM SUBMIT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const service = (form[2] as HTMLInputElement).value;
    const Message = (form[3] as HTMLInputElement).value;

    console.log(name, email, service);

    if (name === "" || email === "" || service === "") {
      toast.warning("Please fill in all fields");
    } else {
      try {
        setIsLoading(true);
        const response = await fetch("https://highkey-api.vercel.app/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, service, Message }),
        });
        const data = await response.json();
        if (data.status) {
          toast.success("Email sent successfully!");
        } else {
          toast.error("Error sending email. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending email. Please try again.");
      } finally {
        setIsLoading(false);
        setIsOpen(false);
      }
    }
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-xl font-semibold text-white bg-aqua py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-darkpurple hover:text-white"
            onClick={() => openModal()}
          >
            Contact Us
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <Image
                        src="/images/navbar/HIGHKEY-logo-green.png"
                        alt="hero-image"
                        width={200}
                        height={50}
                      />
                    </div>
                    <p className="mb-2 lg:mb-5 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      Do you want to take a creative, authentic, values-based
                      approach to growing your business? <br />
                      Have a creative project and are not quite ready to scale
                      your team?
                      <br />
                      Schedule a free consultation and let’s bring your vision
                      to life!
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="text"
                          name="input1"
                          value={inputValues.input1}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-gray px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your email
                        </label>
                        <input
                          id="email"
                          name="input2"
                          value={inputValues.input2}
                          onChange={handleChange}
                          type="email"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-gray px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Choose a service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={inputValues.service}
                          onChange={handleChange}
                          className="relative block w-full appearance-none  rounded-md border border-gray px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="COMMUNICATIONS STRATEGY">
                            COMMUNICATIONS STRATEGY
                          </option>
                          <option value="MARKETING/STORYTELLING">
                            MARKETING/STORYTELLING
                          </option>
                          <option value="GRAPHIC DESIGN">GRAPHIC DESIGN</option>
                          <option value="BRAND ACTIVATIONS AND EVENT PLANNING">
                            BRAND ACTIVATIONS AND EVENT PLANNING
                          </option>
                          <option value="BRAND STRATEGY">BRAND STRATEGY</option>
                          <option value="PERSONAL BRANDING">
                            PERSONAL BRANDING
                          </option>
                          <option value="DIVERSITY, EQUITY + INCLUSION">
                            DIVERSITY, EQUITY + INCLUSION
                          </option>
                          <option value="GEN Z CONSUMER STRATEGY">
                            GEN Z CONSUMER STRATEGY
                          </option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          className="my-4 py-4 sm:pl-6 w-full lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                          placeholder="Your message"
                          rows={4}
                          name="message"
                          value={inputValues.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isDisabled || isLoading}
                        className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-darkpurple hover:bg-hopurple focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Let&apos;s Connect!
                      </button>
                    </form>
                  </div>

                  {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
