import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { Route } from "../+types/root";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const members = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Michael Chen",
    position: "Travel Operations Manager",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Emma Rodriguez",
    position: "Customer Experience Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "David Kim",
    position: "Adventure Tour Specialist",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | About" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// Custom component for scroll animations
function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 pt-30">
        <motion.h1
          className="heading text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us 🌍
        </motion.h1>
        <div className="max-w-5xl mx-auto text-lg leading-relaxed space-y-6">
          <AnimatedSection>
            <p>
              Welcome to Voyager, where we specialize in crafting unforgettable
              travel experiences that span the globe. 🌟
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              Based in Pakistan, our passion for exploration knows no bounds as
              we curate personalized journeys that showcase the rich tapestry of
              cultures, landscapes, and adventures our world has to offer.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p>
              🗺️ From the majestic mountains of the Himalayas to the vibrant
              streets of Marrakech, we're dedicated to creating immersive
              experiences that leave a lasting impression.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p>
              Join us on a journey of discovery, and let's explore the world
              together! ✈️🌏
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <p className="text-center font-semibold mt-8">
              #DiscoverWithVoyager 🌟
            </p>
          </AnimatedSection>
        </div>
      </div>

      <motion.div
        className="flex justify-center items-center flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {members.map((member, index) => (
          <motion.div
            className="flex items-center justify-center"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <div className="flex p-4 flex-col items-center justify-center">
              <div className="overflow-hidden w-70 h-70 rounded-2xl">
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  className="object-cover w-full h-full object-center"
                />
              </div>
              <h3 className="text-[var(--color-slime)] text-lg">
                {member.name}
              </h3>
              <p className="text-gray-500 text-center">{member.position}</p>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <FaFacebookF className="size-8 text-[#1877F2] hover:text-[#1877F2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.7)] transition-all duration-300 cursor-pointer" />
                <FaInstagram className="size-8 text-[#E4405F] hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.7)] transition-all duration-300 cursor-pointer" />
                <FaLinkedin className="size-8 text-[#0A66C2] hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.7)] transition-all duration-300 cursor-pointer" />
                <FaTwitter className="size-8 text-[#1DA1F2] hover:text-[#1DA1F2] hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.7)] transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection delay={0.3}>
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="heading text-center mb-8">
            Your Questions Answered 💭
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <div className="w-[90%] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                How do I book a trip with Voyager?
              </AccordionTrigger>
              <AccordionContent>
                Booking with Voyager is simple! Browse our available tours on
                our website, select your preferred destination and dates, and
                follow the booking process. You can also contact our customer
                service team directly by phone or email if you need assistance
                or want to create a custom itinerary. We recommend booking at
                least 3 months in advance for popular destinations during peak
                season.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">
                What makes Voyager different from other travel agencies?
              </AccordionTrigger>
              <AccordionContent>
                Voyager stands out through our deep local connections and
                authentic experiences. Unlike mass-market agencies, we focus on
                sustainable tourism practices and immersive cultural
                experiences. Our team includes local experts in each
                destination, ensuring you get insider access to hidden gems. We
                also offer 24/7 support during your journey and personalize each
                itinerary to match your interests and travel style.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">
                Do you offer group discounts or custom packages?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer both! Groups of 6 or more travelers can enjoy
                special discounts ranging from 10-15% depending on the
                destination and season. For custom packages, our travel
                specialists will work with you to design a personalized
                itinerary that matches your interests, timeline, and budget. We
                can accommodate special requests like anniversary celebrations,
                family reunions, or corporate retreats with tailored experiences
                and exclusive access to unique venues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </AnimatedSection>
    </>
  );
}
