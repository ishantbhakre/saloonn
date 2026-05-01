"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingObject() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center text-center">
      
      <Canvas className="absolute inset-0">
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <FloatingObject />
      </Canvas>

      <div className="z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Where Style Meets Perfection
        </motion.h1>

        <p className="mt-4 text-gray-300">
          The Legend of Hair
        </p>

        <button className="mt-6 px-6 py-3 bg-gold text-black rounded-lg">
          Book Appointment
        </button>
      </div>
    </section>
  );
}
