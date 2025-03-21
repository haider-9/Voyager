import { Button } from "./ui/button";
import { motion } from "framer-motion";

const TripsGrid = () => {
  // Define trip data with new destinations and images
  const trips = [
    {
      id: 1,
      name: "Paris",
      image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg",
      colSpan: 1,
      height: "h-64"
    },
    {
      id: 2,
      name: "Maldives",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
      colSpan: 2,
      height: "h-64"
    },
    {
      id: 3,
      name: "New York",
      image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg",
      colSpan: 1,
      height: "h-56"
    },
    {
      id: 4,
      name: "Venice",
      image: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
      colSpan: 1,
      height: "h-56"
    },
    {
      id: 5,
      name: "Swiss Alps",
      image: "https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg",
      colSpan: 1,
      height: "h-56"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Function to render trip card
  const renderTripCard = (trip:any) => (
    <motion.div 
      key={trip.id}
      className={`relative group overflow-hidden rounded-lg ${trip.colSpan > 1 ? `col-span-${trip.colSpan}` : ''}`}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={trip.image}
        alt={trip.name}
        width={400}
        height={300}
        className={`rounded-lg object-cover w-full ${trip.height} hover:scale-105 transition-transform duration-300`}
      />
      <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
        {trip.name}
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="space-y-6 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 
        className="heading text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Completed Journeys
      </motion.h2>

      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-5">
          {trips.slice(0, 2).map(renderTripCard)}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {trips.slice(2).map(renderTripCard)}
        </div>
      </div>
      
      <motion.div 
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="rounded-full bg-[var(--color-slime)] w-44 cursor-pointer hover:bg-[var(--color-slime)]/50 transition-colors duration-300 py-6 text-base font-medium">
            Book a trip
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
              className="ml-2"
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
