import { Button } from "~/components/ui/button";
import {
  Headphones,
  LucideMessageSquare,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Route } from "../+types/root";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | Contact" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact() {
  return (
    <>
      <div className="pt-30">
        <div className="text-center">
          <h1 className="heading">Contact Us</h1>
          <p>We'd love to talk about how we can help you.</p>
        </div>
        <div className="flex justify-center">
          <form className="border w-[36rem] rounded-lg">
            <h3 className="text-lg text-start p-6 ">Fill in the form</h3>
            <div className="flex  justify-center py-3 px-8 gap-6 items-center">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input bg-white p-2 text-black rounded-md"
                />
              </div>
              <div>
                <label htmlFor="secondName">Second Name</label>
                <input
                  type="text"
                  id="secondName"
                  className="input bg-white p-2  text-black rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-center  items-center py-3 px-8 gap-6 ">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="input bg-white p-2 text-black rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  className="input bg-white p-2  text-black rounded-md"
                />
              </div>
            </div>
            <div className="px-8 py-3 flex items-center justify-center">
              <div className="w-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="Message"
                  className="bg-white w-full h-[10rem] p-3 rounded-md text-black"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center py-3 px-8">
              <Button className="w-full bg-[var(--color-slime)]/60 cursor-pointer hover:bg-[var(--color-slime)] text-black">
                Send Message
              </Button>
              <p className="text-center mt-2 text-sm">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <div className="flex flex-col justify-center cursor-pointer items-center py-20 px-40 transition-all duration-200 gap-4 group hover:bg-white/5 rounded-lg">
          <Headphones className="w-10 h-10" />
          <p className="font-bold">Customer Support</p>
          <p>We're here to help with any queries.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[var(--color-slime)]">Contact Support</span>
            <span className="group-hover:translate-x-2 transition-all text-[var(--color-slime)] duration-100">
              &gt;
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer py-20 px-40 gap-4 group hover:bg-white/5 transition-all duration-200 rounded-lg">
          <LucideMessageSquare className="w-10 h-10" />
          <p className="font-bold">FAQ</p>
          <p>We're here to help with any queries.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[var(--color-slime)]">Contact FAQ</span>
            <span className="group-hover:translate-x-2 text-[var(--color-slime)] transition-all duration-100">
              &gt;
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 p-10">
        <div className="w-1/2 h-80 rounded-lg overflow-hidden">
          <img
            src="https://dummyimage.com/500"
            alt=""
            className="size-full object-center object-cover"
          />
        </div>
        <div className="w-1/2">
          <div className="space-y-6  flex flex-col justify-center  p-10">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--color-slime)]" />
              <div>
                <h3 className="font-bold">Our address</h3>
                <p>United Kingdom</p>
                <p>300 Bath Street, Tay House</p>
                <p>Glasgow G2 4JR</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[var(--color-slime)]" />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p>supportstaff@voyager.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[var(--color-slime)]" />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p>+44 222 777-000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
