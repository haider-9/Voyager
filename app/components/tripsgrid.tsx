import { Button } from "./ui/button";
import { motion } from "framer-motion";

const TripsGrid = () => {
  // Define trip data with new destinations and images
  const trips = [
    {
      id: 1,
      name: "Tokyo",
      image:
        "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
      colSpan: 1,
      height: "h-64 md:h-72",
    },
    {
      id: 2,
      name: "Santorini",
      image:
        "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
      colSpan: 2,
      height: "h-64 md:h-72",
    },
    {
      id: 3,
      name: "Bali",
      image:
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
      colSpan: 1,
      height: "h-56 md:h-64",
    },
    {
      id: 4,
      name: "Barcelona",
      image:
        "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=800",
      colSpan: 1,
      height: "h-56 md:h-64",
    },
    {
      id: 5,
      name: "Machu Picchu",
      image:
        "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800",
      colSpan: 1,
      height: "h-56 md:h-64",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-4 md:space-y-6 p-2 md:p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="heading text-center text-2xl md:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Completed Journeys
      </motion.h2>

      <div className="space-y-3 md:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {trips.slice(0, 2).map((trip) => (
            <motion.div
              key={trip.id}
              className={`relative overflow-hidden rounded-lg ${
                trip.colSpan > 1 ? `md:col-span-${trip.colSpan}` : ""
              }`}
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              <img
                src={trip.image}
                alt={trip.name}
                width={400}
                height={300}
                className={`rounded-lg object-cover w-full ${trip.height} hover:scale-105 transition-transform duration-300`}
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg md:text-xl drop-shadow-lg">
                {trip.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {trips.slice(2).map((trip) => (
            <motion.div
              key={trip.id}
              className={`relative overflow-hidden rounded-lg ${
                trip.colSpan > 1 ? `md:col-span-${trip.colSpan}` : ""
              }`}
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              <img
                src={trip.image}
                alt={trip.name}
                width={400}
                height={300}
                className={`rounded-lg object-cover w-full ${trip.height} hover:scale-105 transition-transform duration-300`}
              />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg md:text-xl drop-shadow-lg">
                {trip.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="flex justify-center mt-6 md:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="rounded-full bg-[var(--color-slime)] w-36 md:w-44 cursor-pointer hover:bg-[var(--color-slime)]/50 transition-colors duration-300 py-4 md:py-6 text-sm md:text-base font-medium">
            Book a trip
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 md:w-5 md:h-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TripsGrid;
