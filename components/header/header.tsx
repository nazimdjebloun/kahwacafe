"use client"
import React, { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import ModeToggle from "@/components/theme/theme-switch";
import Navbar from "@/components/header/navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className=" fixed p-2 w-full flex items-center justify-center z-999 ">
        <div className=" w-[95%] h-fit p-4 flex flex-row justify-between items-center z-50 rounded-3xl  backdrop-blur-xl">
          <div className="text-xl flex flex-col md:flex-row justify-center  gap-2 items-center ">
            <img
              src="/logoBean.svg"
              alt="Logo"
              className="h-8 bg-black dark:bg-background rounded-4xl p-1"
            />
            <span className="text-center text-lg md:text-2xl">KΛHWΛ CΛFE</span>
          </div>
          <Navbar />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
