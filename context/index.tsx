"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { SingleLink } from "@/interfaces/links";

interface ContextTypes {
  links: SingleLink[];
  setLinks: Dispatch<SetStateAction<SingleLink[]>>;
}

const AppContext = createContext<ContextTypes>({
  links: [],
  setLinks: () => [],
});

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [links, setLinks] = useState<SingleLink[]>([]);

  return (
    <AppContext.Provider
      value={{
        links,
        setLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useMain = () => useContext(AppContext);
