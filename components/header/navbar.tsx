"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navBar = [
    { navName: "Home", navLink: "#home" },
    { navName: "Coffee", navLink: "#coffee" },
    { navName: "About US", navLink: "#about" },
    { navName: "Contact", navLink: "#contact" },
  ];

  return (
    <nav>
      <div className="rounded-2xl">
        <ul className="hidden md:flex flex-row gap-3 text-md">
          {navBar.map((item) => (
            <li key={item.navLink} className="relative group">
              <Link
                href={item.navLink}
                className="relative text-foregroud hover:text-foreground transition-colors duration-300"
              >
                {item.navName}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-foreground group-hover:w-full transition-all duration-300 ease-in-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="flex rounded-xl items-center justify-center transition-all duration-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <X
                className={`absolute transform transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-50"
                }`}
              />
              <Menu
                className={`absolute transform transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 -rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 py-2">
          {navBar.map((item, index) => (
            <li
              key={item.navLink}
              className="relative group"
              style={{
                transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 0.3s ease-in-out ${
                  index * 0.05
                }s, opacity 0.3s ease-in-out ${index * 0.05}s`,
              }}
            >
              <Link
                href={item.navLink}
                onClick={() => setIsMenuOpen(false)}
                className="block relative text-foreground hover:text-foreground transition-colors duration-300 w-fit"
              >
                {item.navName}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-foreground group-hover:w-full transition-all duration-300 ease-in-out" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
