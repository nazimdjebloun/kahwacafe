 "use client"
import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Our signature iced coffee — bold, smooth, and perfectly chilled. The ideal refreshment for coffee lovers who crave flavor and clarity in every sip.",
    name: "Iced Coffee",
    designation: "Customer Favorite",
    src: "/images/coffee/icedcoffee.PNG",
  },
  {
    quote:
      "Premium takeaway experience with our custom-branded cup holder and hot drinks. Designed for convenience, crafted for style.",
    name: "Hot Coffee To-Go",
    designation: "Brand Signature",
    src: "/images/coffee/coffeeholder.PNG",
  },
  {
    quote:
      "The Pistachio Frappe — creamy, nutty, and refreshingly unique. A vibrant blend that stands out with every cool, green sip.",
    name: "Pistachio Frappe",
    designation: "Seasonal Special",
    src: "/images/coffee/coffeePistachio.PNG",
  },
];
export default function CoffeeSection() {
  return (
    <section
      id="coffee"
      className="w-full min-h-dvh border-b-2 flex justify-center flex-col"
    >
      <div className="w-full flex justify-center ">
        <div className="text-center w-full space-y-3 p-3 md:w-[50%]">
          <h1 className="text-2xl md:text-4xl text-amber-700 font-bold p-5">
            Discover our wide variety of freshly brewed coffee – crafted to suit
            every taste.
          </h1>
          <p className="text-xl md:text-2xl">
            From bold
            <span className="font-bold text-amber-700"> espressos</span> to
            creamy
            <span className="font-bold text-amber-700"> lattes</span> , we’ve
            got a coffee for every mood.
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
