import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";

export default function About() {
  return (
    // <section
    //   id="about"
    //   className="min-h-dvh flex flex-col "
    // >
    //   <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 p-5 w-full">
    //     <Image
    //       unoptimized
    //       src="/images/coffee/storefront.PNG"
    //       alt="Store front"
    //       width={500}
    //       height={500}
    //       className="rounded-2xl"
    //     />
    //     <div className="">
    //       <p className="text-2xl md:text-3xl text-center">
    //         At <span className="font-bold text-amber-700  "> KΛHWΛ CΛFE</span>{" "}
    //         we started with a simple idea
    //       </p>
    //       <p className="font-bold text-xl md:text-2xl  text-center p-3">
    //         Elevate the coffee experience and serve the best to our customers.
    //       </p>
    //       <p className="text-foreground text-lg mb-8 leading-relaxed text-center ">
    //         our journey began with a desire to go beyond the ordinary. Whether
    //         you're grabbing a quick espresso or staying to enjoy a slow brew,
    //         our goal is to make every visit something special.
    //       </p>
    //     </div>
    //   </div>

    //   <div className=" max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 p-5 w-full">
    //     <div className="md:w-1/2">
    //       <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center ">
    //         Exceptional Customer Service
    //       </h2>
    //       <p className="text-foreground text-lg mb-8 leading-relaxed text-center ">
    //         At our KΛHWΛ CΛFE, we don't just serve drinks — we serve smiles. Our
    //         baristas and staff go above and beyond to ensure every guest is
    //         treated like family. Whether you're a regular or a first-timer,
    //         expect nothing short of warmth, speed, and precision in every
    //         interaction.
    //       </p>
    //     </div>

    //     <div className="md:w-1/2">
    //       <Image
    //         unoptimized
    //         src="/images/coffee/waiter.PNG"
    //         alt="Our friendly waiter"
    //         width={500}
    //         height={500}
    //         className="rounded-2xl w-full h-auto object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section
      id="about"
      className="min-h-dvh flex flex-col py-16 bg-gradient-to-b "
    >
      {/* First Section - Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 p-5 w-full mb-20"
      >
        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-amber-700/30"></div>
          <Image
            unoptimized
            src="/images/coffee/storefront.PNG"
            alt="KΛHWΛ CΛFE storefront"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full h-auto transform transition-transform hover:scale-[1.02] duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-amber-700/30"></div>
        </div>

        <div className="md:w-1/2 space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light"
          >
            At{" "}
            <span className="font-bold text-amber-700 tracking-wider">
              {" "}
              KΛHWΛ CΛFE
            </span>{" "}
            we started with a simple idea
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="font-bold text-xl md:text-2xl text-amber-700/80"
          >
            Elevate the coffee experience and serve the best to our customers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-foreground/80 text-lg leading-relaxed"
          >
            Our journey began with a desire to go beyond the ordinary. Whether
            you're grabbing a quick espresso or staying to enjoy a slow brew,
            our goal is to make every visit something special.
          </motion.p>
        </div>
      </motion.div>

      {/* Divider */}
      {/* <div className="flex items-center justify-center my-8">
        <div className="h-px w-16 bg-amber-700/30"></div>
        <div className="mx-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-amber-700"
          >
            <path
              d="M12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8ZM12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10ZM18.39 12.56C16.71 11.7 14.53 11 12 11C9.47 11 7.29 11.7 5.61 12.56C4.61 13.07 4 14.1 4 15.22V22H6V15.22C6 14.84 6.2 14.5 6.5 14.34C7.71 13.73 9.63 13 12 13C14.37 13 16.29 13.73 17.5 14.34C17.8 14.5 18 14.84 18 15.22V22H20V15.22C20 14.1 19.39 13.07 18.39 12.56Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="h-px w-16 bg-amber-700/30"></div>
      </div> */}

      {/* Second Section - Customer Service */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 p-5 w-full"
      >
        <div className="md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-amber-700 mb-4"
          >
            Exceptional Customer Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-foreground/80 text-lg leading-relaxed"
          >
            At our
            <span className="font-bold text-amber-700 tracking-wider">
              KΛHWΛ CΛFE
            </span>
            , we don't just serve drinks — we serve smiles. Our baristas and
            staff go above and beyond to ensure every guest is treated like
            family. Whether you're a regular or a first-timer, expect nothing
            short of warmth, speed, and precision in every interaction.
          </motion.p>
        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-amber-700/30"></div>
          <Image
            unoptimized
            src="/images/coffee/waiter.PNG"
            alt="Our friendly barista providing exceptional service"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full h-auto transform transition-transform hover:scale-[1.02] duration-300"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-amber-700/30"></div>
        </div>
      </motion.div>
    </section>
  );
}
