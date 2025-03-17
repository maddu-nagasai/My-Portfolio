import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { 
  FaHome, FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope 
} from "react-icons/fa"; // Import icons

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Routes with Icons
  const routes = [
    { name: "Home", path: "/", icon: <FaHome className="text-lg sm:text-xl" /> },
    { name: "About", path: "/about", icon: <FaUser className="text-lg sm:text-xl" /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase className="text-lg sm:text-xl" /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap className="text-lg sm:text-xl" /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram className="text-lg sm:text-xl" /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope className="text-lg sm:text-xl" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 font-display text-xl sm:text-2xl font-semibold"
          >
            <span className="text-gradient">𝝥</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-4 mr-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center gap-2 nav-link ${
                    location.pathname === route.path ? "nav-link-active" : ""
                  } transition-all duration-300 hover:scale-110`}
                >
                  {route.icon}
                  {route.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle with Rotation Effect on Hover */}
            <motion.div
              whileHover={{ rotate: 3600 }} 
              transition={{ duration: 10, ease: "linear" }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle for Mobile */}
            <motion.div
              whileHover={{ rotate: 3600 }}  
              transition={{ duration: 10, ease: "linear" }} 
            >
              <ThemeToggle />
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-3 p-2 text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card animate-fadeIn">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  location.pathname === route.path ? "nav-link-active" : ""
                } transition-all duration-300 hover:scale-105`}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
