import Head from "next/head";

import AboutMe from "./components/AboutMe/index";
import Articles from "./components/Articles/index";
import Banner from "./components/Banner/index";
import Dedicated from "./components/Dedicated/index";
import Insta from "./components/Insta/index";
import Joinus from "./components/Joinus/index";
import Services from "./components/Services/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>highkey consulting</title>
        <link rel="icon" href="/ico-feather.ico" sizes="48x48" />
      </Head>
      <div>
        <main>
          <Banner />
          <AboutMe />
          <Services />
          <Dedicated />
          {/* <Articles /> */}
          <Joinus />
          <Insta />
        </main>
      </div>
    </>
  );
}
