import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = usePathname();
  const [isMain, setIsMain] = useState(true);

  function isPrincipalPage(path: string) {
    return path === "/";
  }

  useEffect(() => {
    setIsMain(isPrincipalPage(router));
  }, [router]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <script async src="//www.instagram.com/embed.js"></script>
      <Toaster position="top-center" richColors   />
      <Navbar />
      <div
        className={`mt-${isMain ? "2" : "mt-16 md:mt-20 lg:mt-28"}  ${!isMain ? "bg-lightgrey" : ""} md:pb-10 md:pt-${isMain ? "10" : "52"}`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
