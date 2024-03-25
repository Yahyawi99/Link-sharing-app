"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { SingleLink, LinkDatabase } from "@/interfaces/links";
import { fetchUserLinks } from "@/db/links";

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

  const getData = async () => {
    const userLinks = await fetchUserLinks(localStorage.getItem("email") || "");
    console.log(userLinks);
  };

  useEffect(() => {
    getData();
  }, []);

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
