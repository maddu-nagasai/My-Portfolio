import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { 
  FaHome, FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaCode
} from "react-icons/fa"; 
import { motion } from "framer-motion";

// Routes with Icons
const routes = [
  { name: "Home", path: "/", id: "home", icon: <FaHome className="text-lg sm:text-xl" /> },
  { name: "About", path: "/about", id: "about", icon: <FaUser className="text-lg sm:text-xl" /> },
  { name: "Education", path: "/education", id: "education", icon: <FaGraduationCap className="text-lg sm:text-xl" /> },
  { name: "Skills", id: "skills", path: "/skills", icon: <FaCode className="text-lg sm:text-xl" /> },
  { name: "Experience", path: "/experience", id: "experience", icon: <FaBriefcase className="text-lg sm:text-xl" /> },
  { name: "Projects", path: "/projects", id: "projects", icon: <FaProjectDiagram className="text-lg sm:text-xl" /> },
  { name: "Contact", path: "/contact", id: "contact", icon: <FaEnvelope className="text-lg sm:text-xl" /> },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollPosition = window.scrollY + 100;

      for (const route of routes) {
        const element = document.getElementById(route.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(route.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isScrolled ? "backdrop-blur-lg bg-background/80 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={100}
              className="flex items-center space-x-2 font-display text-xl sm:text-2xl font-semibold cursor-pointer"
            >
              <span className="text-gradient">𝝥</span>
            </ScrollLink>
          ) : (
            <Link to="/" className="flex items-center space-x-2 font-display text-xl sm:text-2xl font-semibold">
              <span className="text-gradient">𝝥</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((route) =>
              isHomePage ? (
                <ScrollLink
                  key={route.id}
                  to={route.id}
                  smooth={true}
                  duration={100}
                  spy={true}
                  offset={-80}
                  className={`flex items-center gap-2 cursor-pointer p-2 transition-all ${
                    activeSection === route.id ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-500"
                  }`}
                  
                >
                  {route.icon}
                  {route.name}
                </ScrollLink>
              ) : (
                <Link
                  key={route.id}
                  to={route.path}
                  className="flex items-center gap-2 cursor-pointer p-2 transition-all text-gray-600 hover:text-primary"
                >
                  {route.icon}
                  {route.name}
                </Link>
              )
            )}

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
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-3 p-2 text-foreground focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card animate-fadeIn">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {routes.map((route) =>
              isHomePage ? (
                <ScrollLink
                  key={route.id}
                  to={route.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    activeSection === route.id ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-600 hover:text-blue-500"
                  }`}
                  
                >
                  {route.icon}
                  {route.name}
                </ScrollLink>
              ) : (
                <Link
                  key={route.id}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all text-gray-600 hover:text-primary"
                >
                  {route.icon}
                  {route.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
