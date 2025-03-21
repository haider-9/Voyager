"use client";

import { ShieldCheck,Plane, Flame } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Enjoy some flexibility",
    description: "Stays with flexible cancelation make it easy to re-book if your plans change."
  },
  {
    icon: Plane,
    title: "Over 2 million active trips",
    description: "Stays with flexible cancelation make it easy to re-book if your plans change."
  },
  {
    icon: Flame,
    title: "The Best you can find",
    description: "Stays with flexible cancelation make it easy to re-book if your plans change."
  }
];

export default function FeatureSection() {
  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {features.map(({ icon: Icon, title, description }, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-12 h-12 text-lime-400" />
            </motion.div>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-sm mt-2 text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
