"use client";

import Image from "next/image";
import ModeToggle from "@/components/theme/theme-switch";
import HomeSection from "@/components/section/home";
import CoffeeSection from "@/components/section/coffee";
import Footer from "@/components/section/footer";
import About from "@/components/section/about";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center ">
      {/* <ModeToggle /> */}
      {/* <img src="/test.svg" alt="Logo" className="bg-background" /> */}

      <HomeSection />
      <CoffeeSection />
      <About />
      <Footer />
    </div>
  );
}
