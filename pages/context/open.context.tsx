import { createContext, useContext, useState } from "react";

type OpenContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const OpenContext = createContext<OpenContextType | undefined>(undefined);

export const useOpenContext = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpenContext must be used within an OpenProvider");
  }
  return context;
};

export const OpenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
};
