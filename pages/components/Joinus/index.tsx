import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Join = () => {
  const router = usePathname();
  const [isMain, setIsMain] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function isPrincipalPage(path: string) {
    return path === "/";
  }

  useEffect(() => {
    setIsMain(isPrincipalPage(router));
  }, [router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const service = (form[2] as HTMLInputElement).value;
    const Message = (form[3] as HTMLInputElement).value;

    if (name === "" || email === "" || service === "") {
      // alert("Please fill in all fields");
      toast.warning("Please fill in all fields");
    } else {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://highkey-api.vercel.app/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, service, Message }),
          }
        );
        const data = await response.json();
        if (data.status) {
          setIsLoading(false);
          form.reset();
          toast.success("Email sent successfully!");
        } else {
          toast.error("Error sending email. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error sending email. Please try again.");
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className={`  ${isMain ? "bg-white text-black bg-joinus" : "mb-20 relative z-10 bg-[linear-gradient(180deg,_rgba(141,_26,_129,_1)_0%,_rgba(39,_7,_36,_1)_71%,_rgba(25,_22,_23,_1)_100%)]"} inset-shadow-sm  z-20`}
    >
      <div className="mx-auto max-w-2xl py-20 lg:max-w-7xl  lg:px-8">
        <div className="text-center">
          <h2
            className={`${isMain ? "text-black" : "text-white"} text-4xl mx-10 md:mx-0 sm:text-6xl font-bold my-6 leading-10`}
          >
            Schedule a free 30 minute consultation <br /> and let’s bring your
            vision to life!
          </h2>
        </div>

        <div className="mx-auto  pt-5">
          <form onSubmit={handleSubmit}>
            <div className="sm:flex flex-wrap items-center mx-5 p-5 sm:p-2 rounded-xl justify-center gap-5  bg-lightgrey shadow-lg ">
              <div>
                <div className="flex flex-col md:flex-row justify-between md:gap-11">
                  <input
                    type="name"
                    className="my-4 py-4 sm:pl-6  w-full md:w-11/12 lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                    placeholder="Your name"
                    autoComplete="off"
                  />
                  <input
                    type="email"
                    className="my-4 py-4 sm:pl-6 w-full md:w-11/12 lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                    placeholder="Your email"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <select
                    id="services"
                    className="my-4 py-4 sm:pl-6  w-full lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                  >
                    <option
                      selected
                      value=""
                      disabled
                      className="text-lightgrey"
                    >
                      Choose a service
                    </option>
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
                    <option value="PERSONAL BRANDING">PERSONAL BRANDING</option>
                    <option value="DIVERSITY, EQUITY + INCLUSION">
                      DIVERSITY, EQUITY + INCLUSION
                    </option>
                    <option value="GEN Z CONSUMER STRATEGY">
                      GEN Z CONSUMER STRATEGY
                    </option>
                  </select>
                  <textarea
                    className="my-4 py-4 sm:pl-6 w-full lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                    placeholder="Your message"
                    rows={4}
                  ></textarea>
                  <div className="pb-5 sm:mr-3 justify-center flex items-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`joinButton w-full sm:w-0 text-lg  text-white font-semibold text-center rounded-xl sm:rounded-full bg-darkpurple hover:bg-hopurple ${isLoading && "opacity-70"}`}
                    >
                      {isLoading ? (
                        <div className="flex space-x-2   justify-center items-center  h-12 dark:invert">
                          <span className="sr-only">Loading...</span>
                          <div className="h-5 w-5 top- bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-5 w-5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-5 w-5 bg-white rounded-full animate-bounce"></div>
                        </div>
                      ) : (
                        <p>let&apos;s connect!</p>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
