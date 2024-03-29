"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { SingleLink } from "@/interfaces/links";
import { fetchUserLinks } from "@/db/links";
import { fetchUser } from "@/db/user";
import { UserDocument } from "@/interfaces";

interface ContextTypes {
  links: SingleLink[];
  setLinks: Dispatch<SetStateAction<SingleLink[]>>;
  animateShowModal: () => void;
  showModal: boolean;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: UserDocument;
  setUser: Dispatch<SetStateAction<UserDocument>>;
}

const AppContext = createContext<ContextTypes>({
  links: [],
  setLinks: () => [],
  animateShowModal: () => {},
  showModal: false,
  loading: false,
  setLoading: () => {},
  user: {},
  setUser: () => {},
});

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [links, setLinks] = useState<SingleLink[]>([]);
  const [user, setUser] = useState<UserDocument>({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const userLinks =
      (await fetchUserLinks(localStorage.getItem("email") || "")) || [];
    setLinks(userLinks);

    const user = (await fetchUser(
      localStorage.getItem("email") || ""
    )) as UserDocument;
    setUser(user);
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
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useMain = () => useContext(AppContext);
