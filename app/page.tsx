import AboutMe from "./components/AboutMe/index";
import Articles from "./components/Articles/index";
import Banner from "./components/Banner/index";
import Dedicated from "./components/Dedicated/index";
import Insta from "./components/Insta/index";
import Joinus from "./components/Joinus/index";
import Services from "./components/Services/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Services />
      <Dedicated />
      {/* <Articles /> */}
      <Joinus />
      <Insta />
    </main>
  );
}
