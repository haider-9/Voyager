import { Link, useLocation } from "react-router";
import {
  User,
  AtSign,
  LucideHome,
  Globe2Icon,
  InfoIcon,
  Settings,
  Sun,
  Menu,
  X
} from "lucide-react";
import { Fragment, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { icon: <LucideHome size={16} />, text: "Home", path: "/" },
    { icon: <AtSign size={16} />, text: "Contact", path: "/contact" },
    { icon: <InfoIcon size={16} />, text: "About", path: "/about" },
    { icon: <Settings size={16} />, text: "Services", path: "/services" },
    { icon: <Globe2Icon size={16} />, text: "Trips", path: "/trips" },
    { icon: <User size={16} />, text: "Log In", path: "/login" },
  ];

  return (
    <>
      <nav className="bg-[var(--color-accent)]/50 w-[90%] backdrop-blur-2xl mx-auto my-6 rounded-full px-6 py-4 flex items-center justify-between absolute top-0 left-0 right-0 z-10">
        <Link to={"/"}>
          <div className="rounded-full size-14 overflow-hidden">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-center p-2 object-cover"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation - Hidden on large screens and below */}
        <div className="hidden lg:block">
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
        
        {/* Menu Icon - Visible only on large screens and below */}
        <div className="lg:hidden">
          <button 
            onClick={toggleSidebar}
            className="text-white p-2 rounded-md hover:bg-white/10"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 right-0 h-full w-64 bg-[var(--color-accent)] shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 flex justify-between items-center border-b border-white/20">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <button 
              onClick={toggleSidebar}
              className="text-white p-2 rounded-md hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>
          
          <ul className="p-4 flex flex-col gap-4 text-white">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 
                    ${
                      location.pathname === item.path
                        ? "bg-white/20 font-bold"
                        : ""
                    }
                    hover:bg-white/10`}
                  onClick={toggleSidebar}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
            <li className="px-3 py-2">
              <div className="flex items-center gap-3">
                <Sun className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors duration-200" />
                <span>Toggle Theme</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
