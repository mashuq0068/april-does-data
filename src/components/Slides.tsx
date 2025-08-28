"use client";
import { motion } from "framer-motion";

const Slides = () => {
  return (
    <div className="mx-auto  mb-10 flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* First Image */}

      {/* Second Image */}
      <motion.img
        src="/client-main.png"
        alt="Client Slide"
        className="w-full md:w-1/2   shadow-xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      />
      <motion.img
        src="/client-info-updated.png"
        alt="Text Slide"
        className="w-full md:w-1/2 object-contain  shadow-xl"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      />
    </div>
  );
};

export default Slides;
