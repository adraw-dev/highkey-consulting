const Join = () => {
  return (
    <div className="bg-joinus bg-lightgrey my-20">
      <div className="mx-auto max-w-2xl py-20 lg:max-w-7xl  lg:px-8">
        <div className="text-center">
          <h3 className="text-aqua text-lg font-normal tracking-widest">
            JOIN US
          </h3>
          <h2 className="text-black text-4xl sm:text-6xl font-bold my-6 leading-10">
            {" "}
            A simple and friendly way for potential clients to reach out to you
          </h2>
          <p className="text-black text-base font-xl">
            Do you want to take a creative, authentic, values-based approach to
            growing your business? <br /> Have a creative project and are not
            quite ready to scale your team?
            <br /> <br /> Schedule a free consultation and let’s bring your
            vision to life!{" "}
          </p>
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey shadow-lg sm:rounded-full">
            <div>
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-lg  text-white font-semibold text-center rounded-xl sm:rounded-full bg-darkpurple hover:bg-hopurple"
              >
                let&apos;s connect!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
