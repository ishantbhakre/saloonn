"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 text-center">
      <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-gold"
      >
        The Legend of Hair
      </motion.h2>

      <p className="max-w-2xl mx-auto mt-6 text-gray-300">
        Habibs Hair & Beauty is a sanctuary where skill meets style. 
        Our master stylists specialize in transformative hair artistry, 
        precision grooming, and luxury skincare.
      </p>
    </section>
  );
}
