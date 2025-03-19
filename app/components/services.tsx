"use client";

import { ShieldCheck,Plane, Flame } from "lucide-react";

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
          <div key={index} className="flex flex-col items-center">
            <Icon className="w-12 h-12 text-lime-400" />
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <p className="text-sm mt-2 text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
