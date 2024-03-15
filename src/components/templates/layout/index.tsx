import React, { useEffect } from "react";
import { useScrollStore } from "../../../store";
import { Footer, Navbar } from "../../organisms";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const updateScrollPos = useScrollStore((state) => state.updateScrollPos);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    updateScrollPos(scrollPosition);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
