import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <script async src="//www.instagram.com/embed.js"></script>
      <Navbar />
      <div className="lg:mt-28">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;