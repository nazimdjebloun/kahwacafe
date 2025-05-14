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
