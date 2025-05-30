"use client"
import Link from "next/link";
import Contactusform from "./Contactus";
import { navigation } from "./Navbar";
import { useEffect, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el ancho de la ventana
    const handleResize = () => {
      setShowContact(window.innerWidth <= 1150);
    };

    // Ejecutar al montar
    handleResize();

    // Escuchar cambios de tamaño
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-semibold "
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            {showContact ? <Contactusform /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;