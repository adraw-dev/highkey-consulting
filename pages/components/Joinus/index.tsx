import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const Join = () => {
  const router = usePathname();
  const [isMain, setIsMain] = useState(true);

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

    console.log(name, email, service);

    if (name === "" || email === "" || service === "") {
      alert("Please fill in all fields");
    } else {
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, service }),
      });
    }
  };

  return (
    <div
      className={`bg-joinus  ${isMain ? "bg-white text-black" : "bg-[#1a3b3b]"} inset-shadow-sm mb-20 z-20`}
      style={{
        backgroundImage: `${isMain ? 'url("/images/joinus/feather.svg")' : 'url("/images/joinus/feather-white.svg")'}`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "14rem",
        backgroundPosition: "100% 56%, 23% 1%",
      }}
    >
      <div className="mx-auto max-w-2xl py-20 lg:max-w-7xl  lg:px-8">
        <div className="text-center">
          <h2
            className={`${isMain ? "text-black" : "text-white"} text-4xl mx-10 md:mx-0 sm:text-6xl font-bold my-6 leading-10`}
          >
            {" "}
            Schedule a free 30 minute consultation and let’s bring your vision
            to life!
          </h2>
        </div>

        <div className="mx-auto  pt-5">
          <form onSubmit={handleSubmit}>
            <div className="sm:flex flex-wrap items-center mx-5 p-5 sm:p-2 rounded-xl justify-center gap-5  bg-lightgrey shadow-lg ">
              <div>
                <input
                  type="name"
                  className="my-4 py-4 sm:pl-6  lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>
              <div>
                <select
                  id="services"
                  className="my-4 py-4 sm:pl-2 lg:text-xl text-black sm:rounded-2xl bg-[##fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
                >
                  <option selected value="" disabled className="text-lightgrey">
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
              </div>

              <div className="sm:mr-3 ">
                <button
                  type="submit"
                  className="joinButton w-full sm:w-0 text-lg  text-white font-semibold text-center rounded-xl sm:rounded-full bg-darkpurple hover:bg-hopurple"
                >
                  let&apos;s connect!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
