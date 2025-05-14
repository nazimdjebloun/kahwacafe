"use client";
import React from "react";
import Image from "next/image";
export default function HomeSection() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center content-center p-5 min-h-dvh border-b-2 ">
      <div className="h-[100%] p-5 flex  justify-center items-center ">
        <Image
          unoptimized
          src="/images/coffee/coffee1.png"
          width={500}
          height={500}
          className="rounded-xl rotate-6 transform transition-transform hover:scale-[1.05] duration-200"
          alt="Coffee Bag"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center  text-center p-0 ">
        <Image
          src="/fullLogo.svg"
          alt="Logo"
          width={500}
          height={500}
          className="w-[40%] rotate-90 md:w-[30%] bg-black dark:bg-background rounded-4xl p-5"
        />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Experience Authentic <span className="text-amber-700"> Coffee</span>
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl text-center p-5">
          Discover the rich flavors and traditions of our premium coffee,
          sourced from the finest beans and brewed to perfection.
        </p>
      </div>
      <div className="h-[100%] p-5 flex justify-between flex-col gap-20 ">
        <Image
          unoptimized
          src="/images/coffee/coffee2.png"
          width={500}
          height={500}
          className="rounded-xl rotate-350 transform transition-transform hover:scale-[1.05] duration-200"
          alt="Coffee Cup"
        />
        <Image
          unoptimized
          src="/images/coffee/coffee3.png"
          width={500}
          height={500}
          className="rounded-xl rotate-10 transform transition-transform hover:scale-[1.05] duration-200"
          alt="Coffee Cup"
        />
      </div>
    </div>
  );
}
