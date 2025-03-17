import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";  // Import motion for animations
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
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
            <nav className="flex items-center space-x-2 mr-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`nav-link ${
                    location.pathname === route.path ? "nav-link-active" : ""
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle with Rotation Effect on Hover */}
            <motion.div
              whileHover={{ rotate: 3600 }}  // Rotates when hovered
              transition={{ duration: 10, ease: "linear" }} // Faster rotation speed
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle with Rotation Effect on Hover for Mobile */}
            <motion.div
              whileHover={{ rotate: 3600 }}  // Rotates when hovered
              transition={{ duration: 10, ease: "linear" }} // Faster rotation speed
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
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`nav-link p-3 ${
                  location.pathname === route.path ? "nav-link-active" : ""
                }`}
              >
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
