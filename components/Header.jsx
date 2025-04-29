import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="text-center py-10">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        MTech Automotive Electronics
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Explore innovation in automotive technology, systems, and embedded solutions.
      </motion.p>
    </header>
  );
}