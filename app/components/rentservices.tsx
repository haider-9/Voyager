import { Button } from "./ui/button";
import { CarFront, Bed } from "lucide-react";
import { motion } from "framer-motion";

export default function RentServices() {
  return (
    <div className="container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
      >
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">Where do you want to go</p>
          <h2 className="heading text-white">Let us worry about your plans,</h2>
          <h2 className="heading">Just get packed</h2>
        </div>
        <div>
          <Button
            variant={"ghost"}
            className="hover:bg-[var(--color-slime)] w-fit duration-500 cursor-pointer relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a trip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[var(--color-slime)] ease-in-out transition-all duration-500 group-hover:w-full -z-0"></span>
          </Button>
        </div>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden w-full lg:w-2/3 h-[400px] lg:h-[600px] rounded-3xl"
        >
          <img
            src="/assets/location.jpg"
            alt="Travel destination"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-8 items-start flex-col w-full lg:w-1/3"
        >
          <motion.div className="flex gap-6 flex-col w-full">
            <div className="flex items-center justify-center rounded-full bg-white p-4 w-12 h-12">
              <CarFront className="text-black w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Rent A Car</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                eius? Quaerat quos ipsum et doloribus ex neque non. Incidunt nam
                deleniti ipsa cumque minima quasi voluptatibus cum hic officia?
                Asperiores?
              </p>
              <span className="relative text-[var(--color-slime)] z-10 flex items-center gap-2 hover:underline cursor-pointer">
                Let's Go
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>
          <motion.div className="flex gap-6 flex-col w-full">
            <div className="flex items-center justify-center rounded-full bg-white p-4 w-12 h-12">
              <Bed className="text-black w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Book A Stay</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
                eius? Quaerat quos ipsum et doloribus ex neque non. Incidunt nam
                deleniti ipsa cumque minima quasi voluptatibus cum hic officia?
                Asperiores?
              </p>
              <span className="relative text-[var(--color-slime)] z-10 flex items-center gap-2 hover:underline cursor-pointer">
                Let's Go
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
