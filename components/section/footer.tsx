"use client";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    // <div className="w-full h-full">
    //   <footer
    //     className="w-full bg-cover bg-center relative"
    //     style={{ backgroundImage: `url('/images/coffee/storefront.PNG')` }}
    //   >
    //     {/* Overlay (optional for darker effect) */}
    //     <div className="absolute inset-0 bg-black/40 " />

    //     {/* Glass card */}
    //     <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 flex justify-center">
    //       <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 md:p-10 text-center text-white w-full">
    //         <h2 className="text-2xl md:text-3xl font-semibold mb-4">
    //           Visit KΛHWΛ CΛFE
    //         </h2>
    //         <p className="text-lg md:text-xl mb-6">
    //           More than just coffee – it's a place where stories begin, and
    //           comfort is brewed daily.
    //         </p>
    //         <p className="text-sm opacity-75">
    //           © {new Date().getFullYear()} KΛHWΛ CΛFE. All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    // <section
    //   id="contact"
    //   className="py-16 md:py-24 w-full"
    //   style={{ backgroundImage: `url('/images/coffee/storefront.PNG')` }}
    // >
    //   <div className="p-5 container grid gap-8 md:grid-cols-2 border-black">
    //     <div className="backdrop-blur-sm rounded-2xl p-3">
    //       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
    //         Visit Us
    //       </h2>
    //       <p className="mt-2 text-white">
    //         We'd love to see you at one of our locations. Stop by for a cup of
    //         our signature coffee!
    //       </p>

    //       <div className="mt-8 grid gap-6">
    //         <div className="flex items-start gap-4">
    //           <MapPin className="mt-1 h-5 w-5 text-white" />
    //           <div>
    //             <h3 className="font-semibold text-white">Main Location</h3>
    //             <p className="text-white">123 Coffee Street, Downtown</p>
    //           </div>
    //         </div>

    //         <div className="flex items-start gap-4">
    //           <Clock className="mt-1 h-5 w-5 text-white" />
    //           <div>
    //             <h3 className="font-semibold text-white">Opening Hours</h3>
    //             <p className="text-white">Monday - Friday: 7am - 8pm</p>
    //             <p className="text-white">Saturday - Sunday: 8am - 9pm</p>
    //           </div>
    //         </div>

    //         <div className="flex items-start gap-4">
    //           <Phone className="mt-1 h-5 w-5 text-white" />
    //           <div>
    //             <h3 className="font-white text-white">Contact Us</h3>
    //             <p className="text-white">Phone: (555) 123-4567</p>
    //             <p className="text-white">Email: info@arabicadelights.com</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto">
    //       <Image
    //         src="/storefront.png"
    //         alt="Map Location"
    //         fill
    //         className="object-cover"
    //       />
    //     </div> */}
    //   </div>
    // </section>
    <section
      id="contact"
      className="py-16 md:py-24 w-full border-t-2"
      style={{ backgroundImage: `url('/images/coffee/pattern.PNG')` }}
    >
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-black/30 rounded-xl shadow-lg   p-6 md:p-8 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
            Visit Us
          </h2>
          <p className="mt-2 text-white">
            We'd love to see you at one of our locations. Stop by for a cup of
            our signature coffee!
          </p>
          <div className="mt-8 grid gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold text-white">Main Location</h3>
                <p className="text-white">123 Coffee Street, Downtown</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold text-white">Opening Hours</h3>
                <p className="text-white">Monday - Friday: 7am - 8pm</p>
                <p className="text-white">Saturday - Sunday: 8am - 9pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-white" />
              <div>
                <h3 className="font-semibold text-white">Contact Us</h3>
                <p className="text-white">Phone: (555) 123-4567</p>
                <p className="text-white">Email: info@kahwaraw.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
