import { ArrowDown } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "../+types/root";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | Services" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Services() {
  return (
    <div>
      <section>
        <div className="w-full overflow-hidden shadow-lg h-screen relative">
          <img
            src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg"
            alt="Aerial view of landscape"
            className="w-full h-full brightness-75 object-cover"
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Tours & Excursions
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Experience the Pacific Northwest with Oregon's premiere helicopter
              and airplane charter company.
            </motion.p>
          </motion.div>
          <motion.div
            className="rounded-full absolute right-10 bottom-10 size-15 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowDown className="animate-bounce text-white" />
          </motion.div>
        </div>
      </section>
      <motion.div
        className="container mx-10 py-16 w-[30rem]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading">Tours Built for You</h2>
        <p>
          Visit world-renowned wineries. Tour Mt. St. Helens from the air. See
          the best views of Portland and spend the day tracing the gorgeous
          Columbia Gorge. Our tours are completely customizable and built around
          you.
        </p>
      </motion.div>
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-start gap-8">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/1122462/pexels-photo-1122462.jpeg"
                alt="Aerial view of mountains"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center flex-col">
                <h3 className="text-2xl font-bold mt-6 mb-4 ">
                  Scenic Air Tours
                </h3>
                <p className="text-gray-600 mb-2 text-center">
                  Experience breathtaking aerial views of the Pacific Northwest
                  landscape.
                </p>
                <p className="text-gray-600 mb-4 ">
                  Custom routes available for your perfect adventure.
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"#"}
                    className="text-[var(--color-slime)]   font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg"
                alt="Vineyard landscape"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mt-6 mb-4">
                  Wine Country Tours
                </h3>
                <p className="text-gray-600 mb-2">
                  Visit exclusive wineries and taste the finest local wines.
                </p>
                <p className="text-gray-600 mb-4">
                  Full-day experiences with luxury transportation included.
                </p>
                <motion.a
                  href="#"
                  className="text-[var(--color-slime)] font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-8 py-16">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading">Book Your Next Tour</h2>
              <p>
                Ready to embark on your next adventure? Choose from our
                customizable and tailored tours.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <motion.button
                  className="bg-[var(--color-slime)] flex gap-2 items-center px-8 cursor-pointer py-4 rounded-full text-black font-semibold shadow-[0_0_20px_var(--color-slime)] hover:shadow-[0_0_30px_var(--color-slime)] transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="true"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </motion.button>{" "}
              </div>
            </motion.div>
            <motion.img
              src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg"
              alt="Airplane wing view"
              className="w-[40rem] h-92 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
