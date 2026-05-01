"use client";

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Booking from "../components/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Booking />
    </main>
  );
}
