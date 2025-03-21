import { Button } from "~/components/ui/button";
import {
  Headphones,
  LucideMessageSquare,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Route } from "../+types/root";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | Contact" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact() {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: { duration: 0.3 },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <motion.div
        className="pt-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading">Contact Us</h1>
          <p>We'd love to talk about how we can help you.</p>
        </motion.div>
        <div className="flex justify-center">
          <motion.form
            className="border w-[36rem] rounded-lg"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-lg text-start p-6 ">Fill in the form</h3>
            <div className="flex justify-center py-3 px-8 gap-6 items-center">
              <motion.div
                variants={inputVariants}
                custom={1}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="name">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  className="input bg-white p-2 text-black rounded-md"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px var(--color-slime)",
                  }}
                />
              </motion.div>
              <motion.div
                variants={inputVariants}
                custom={2}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="secondName">Second Name</label>
                <motion.input
                  type="text"
                  id="secondName"
                  className="input bg-white p-2 text-black rounded-md"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px var(--color-slime)",
                  }}
                />
              </motion.div>
            </div>
            <div className="flex justify-center items-center py-3 px-8 gap-6 ">
              <motion.div
                variants={inputVariants}
                custom={3}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="email">Email</label>
                <motion.input
                  type="text"
                  id="email"
                  className="input bg-white p-2 text-black rounded-md"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px var(--color-slime)",
                  }}
                />
              </motion.div>
              <motion.div
                variants={inputVariants}
                custom={4}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="phone">Phone Number</label>
                <motion.input
                  type="text"
                  id="phone"
                  className="input bg-white p-2 text-black rounded-md"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px var(--color-slime)",
                  }}
                />
              </motion.div>
            </div>
            <div className="px-8 py-3 flex items-center justify-center">
              <motion.div
                className="w-full"
                variants={inputVariants}
                custom={5}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="message">Message</label>
                <motion.textarea
                  id="message"
                  name="Message"
                  className="bg-white w-full h-[10rem] p-3 rounded-md text-black"
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px var(--color-slime)",
                  }}
                />
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col justify-center py-3 px-8"
              variants={inputVariants}
              custom={6}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button className="w-full bg-[var(--color-slime)]/60 cursor-pointer hover:bg-[var(--color-slime)] text-black">
                  Send Message
                </Button>
              </motion.div>
              <p className="text-center mt-2 text-sm">
                We'll get back to you in 1-2 business days.
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10">
        <motion.div
          className="flex flex-col justify-center cursor-pointer items-center py-20 px-40 transition-all duration-200 gap-4 group rounded-lg"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Headphones className="w-10 h-10" />
          </motion.div>
          <p className="font-bold">Customer Support</p>
          <p>We're here to help with any queries.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[var(--color-slime)]">Contact Support</span>
            <motion.span
              className="text-[var(--color-slime)]"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              &gt;
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center cursor-pointer py-20 px-40 gap-4 rounded-lg"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <LucideMessageSquare className="w-10 h-10" />
          </motion.div>
          <p className="font-bold">FAQ</p>
          <p>We're here to help with any queries.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[var(--color-slime)]">Contact FAQ</span>
            <motion.span
              className="text-[var(--color-slime)]"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              &gt;
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-10 p-10">
        <motion.div
          className="w-1/2 h-80 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt=""
            className="size-full object-center object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-6 flex flex-col justify-center p-10">
            <motion.div
              className="flex items-start gap-4"
              variants={contactInfoVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-6 h-6 text-[var(--color-slime)]" />
              </motion.div>
              <div>
                <h3 className="font-bold">Our address</h3>
                <p>United Kingdom</p>
                <p>300 Bath Street, Tay House</p>
                <p>Glasgow G2 4JR</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              variants={contactInfoVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-6 h-6 text-[var(--color-slime)]" />
              </motion.div>
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p>supportstaff@voyager.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-4"
              variants={contactInfoVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-6 h-6 text-[var(--color-slime)]" />
              </motion.div>
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p>+44 222 777-000</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
