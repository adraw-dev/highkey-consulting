import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Joinbetter = () => {
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
    <div className="w-full min-h-screen flex flex-col md:flex-row  ">
      {/* Left side: Image and text */}
      <div
        className={`md:w-1/2 w-full flex flex-col justify-center items-center ${isMain ? "bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)]" : "bg-[linear-gradient(180deg,_#8d1a81_0%,_#270724_55%,_#191617_62%)]"} relative overflow-hidden`}
      >
        {/* Background overlay */}
        <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(134.66deg,_#1A3B3B_6.35%,_#154643_95.93%)] opacity-80 z-0"></div>
        {/* Pseudo-element for peacock feather */}
        {/* Pseudo-element for peacock feather using a div absolutely positioned at the left edge */}
        <div className="block absolute left-0  -translate-y-1/2 z-20 h-[50%] md:h-[30%] aspect-square pointer-events-none">
         
            <Image
              src="/images/joinus/peacock_feather.png"
              alt="Peacock Feather"
              fill
              style={{ objectFit: "contain" }}
              className="!left-[-10%]" // move image to the very edge
              priority
            />
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center mt-56 items-start h-full px-10 py-16">
          <h2 className="text-white text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-6">
            Schedule a free
            <br />
            30 minute consultation
            <br />
            and let’s bring
            <br />
            your vision to life!
          </h2>
        </div>
        {/* Background image */}
        <Image
          src="/images/services/lgtb.jpg"
          alt="Background"
          fill
          className="absolute left-0 top-0 w-full h-full object-cover z-0 opacity-40"
          style={{ objectFit: "cover", zIndex: 0, opacity: 0.4 }}
          priority
        />
      </div>
      {/* Right side: Form */}
      <div
        className={`md:w-1/2 w-full flex flex-col md:justify-center items-center ${isMain ? "bg-transparent" : "bg-[linear-gradient(180deg,_#8d1a81_0%,_#270724_55%,_#191617_90%)] "}   px-8 py-16`}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col items-center"
        >
          <label className="w-full text-center text-white mb-2 text-lg">
            Your Name
          </label>
          <input
            type="text"
            className="mb-4 py-3 px-6 w-full rounded-2xl text-black bg-white focus:outline-none text-lg"
            placeholder="Your name"
            autoComplete="off"
          />
          <label className="w-full text-center text-white mb-2 text-lg">
            Your Email
          </label>
          <input
            type="email"
            className="mb-4 py-3 px-6 w-full rounded-2xl text-black bg-white focus:outline-none text-lg"
            placeholder="Your email"
            autoComplete="off"
          />
          <label className="w-full text-center text-white mb-2 text-lg">
            Choose A Service
          </label>
          <select
            id="services"
            className="mb-6 py-3 px-6 w-full rounded-2xl text-black bg-white focus:outline-none text-lg"
            defaultValue=""
          >
            <option value="" disabled>
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
          {/* Hidden textarea for message, as in original code */}
          <textarea
            className="my-4 py-4 sm:pl-6 w-full lg:text-xl text-black rounded-2xl bg-[#fdfdfd] border pl-1 focus:outline-none bg-emailbg focus:text-black"
            placeholder="Your message"
            rows={4}
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-48 py-3 rounded-full bg-darkpurple hover:bg-hopurple text-white font-semibold text-lg transition-all duration-200 flex justify-center items-center"
          >
            {isLoading ? (
              <div className="flex space-x-2 justify-center items-center h-6">
                <span className="sr-only">Loading...</span>
                <div className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-3 w-3 bg-white rounded-full animate-bounce"></div>
              </div>
            ) : (
              <span>Let&#39;s connect</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Joinbetter;
