import { Link, useLocation } from "react-router";
import {
  User,
  AtSign,
  LucideHome,
  Globe2Icon,
  InfoIcon,
  Settings,
  Sun,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { icon: <LucideHome size={16} />, text: "Home", path: "/" },
    { icon: <AtSign size={16} />, text: "Contact", path: "/contact" },
    { icon: <InfoIcon size={16} />, text: "About", path: "/about" },
    { icon: <Settings size={16} />, text: "Services", path: "/services" },
    { icon: <Globe2Icon size={16} />, text: "Trips", path: "/trips" },
    { icon: <User size={16} />, text: "Log In", path: "/login" },
  ];

  return (
    <nav className="bg-[var(--color-accent)]/50 w-[90%] backdrop-blur-2xl mx-auto my-6 rounded-full px-6 py-4 flex items-center justify-between absolute top-0 left-0 right-0 z-10">
      <Link to={"/"}>
        <div className="rounded-full size-14 overflow-hidden ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-center p-2 object-cover"
          />
        </div>
      </Link>
      <div>
        <ul className="flex items-center gap-4 text-white text-semibold">
          {navItems.map((item, index) => (
            <Fragment key={item.text}>
              <li className="flex items-center justify-center gap-1">
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-1 rounded-md transition-colors duration-200 
                    ${
                      location.pathname === item.path
                        ? "bg-white/20 font-bold"
                        : ""
                    }
                    hover:bg-white/10`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
              {index === navItems.length - 2 && <li>|</li>}
            </Fragment>
          ))}
          <Sun className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors duration-200" />
        </ul>
      </div>
    </nav>
  );
}
