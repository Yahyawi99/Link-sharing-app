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
  animateShowModal: () => void;
  showModal: boolean;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<ContextTypes>({
  links: [],
  setLinks: () => [],
  animateShowModal: () => {},
  showModal: false,
  loading: false,
  setLoading: () => {},
});

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [links, setLinks] = useState<SingleLink[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const userLinks = await fetchUserLinks(localStorage.getItem("email") || "");
  };

  useEffect(() => {
    getData();
  }, []);

  const animateShowModal = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        links,
        setLinks,
        animateShowModal,
        showModal,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useMain = () => useContext(AppContext);
