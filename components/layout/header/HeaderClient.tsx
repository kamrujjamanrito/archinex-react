"use client";
import { useState, ReactNode, createContext } from "react";
import dynamic from "next/dynamic";

const OffCanvasMenu = dynamic(() => import("./OffCanvasMenu"), { ssr: false });

interface Props {
  children: ReactNode;
}

interface HeaderContextProps {
  openOffcanvas: () => void;
  isOffcanvasOpen: boolean;
}

export const HeaderContext = createContext<HeaderContextProps | null>(null);

const HeaderClient = ({ children }: Props) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => setIsOffcanvasOpen(false);

  return (
    <HeaderContext.Provider value={{ openOffcanvas, isOffcanvasOpen }}>
      {children}
      <OffCanvasMenu isOpen={isOffcanvasOpen} onClose={closeOffcanvas} />
    </HeaderContext.Provider>
  );
};

export default HeaderClient;
