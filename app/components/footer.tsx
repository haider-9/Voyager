import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E1129] text-white py-8 mt-15 px-6 flex  items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8"
        />
        <span className="text-lg font-semibold">Voyager</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-400">
          &copy; {new Date().getFullYear()} —{" "}
          <span className="font-semibold text-white">
            Design Inspiration 🎨
          </span>
        </span>
      </div>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-blue-500 hover:drop-shadow-[0_0_10px_#1877F2] transition duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:drop-shadow-[0_0_10px_#FFFFFF] transition duration-300"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-pink-500 hover:drop-shadow-[0_0_10px_#E4405F] transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          className="text-blue-400 hover:drop-shadow-[0_0_10px_#0077B5] transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
