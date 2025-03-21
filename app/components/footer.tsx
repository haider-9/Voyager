import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E1129] text-white py-8 mt-15 px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8"
            />
            <span className="text-lg font-semibold">Voyager</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 hidden sm:inline">|</span>
            <span className="text-gray-400">
              © {new Date().getFullYear()} —{" "}
              <span className="font-semibold text-white">
                Design Inspiration 🎨
              </span>
            </span>
          </div>
        </div>
        <div className="flex space-x-6 justify-center md:justify-end">
          <a
            href="#"
            className="text-blue-500 hover:drop-shadow-[0_0_10px_#1877F2] transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="#"
            className="text-white hover:drop-shadow-[0_0_10px_#FFFFFF] transition duration-300"
            aria-label="Twitter"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="#"
            className="text-pink-500 hover:drop-shadow-[0_0_10px_#E4405F] transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:drop-shadow-[0_0_10px_#0077B5] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
