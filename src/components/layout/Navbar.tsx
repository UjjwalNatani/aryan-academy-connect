
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admission", path: "/admission" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-school-dark text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>9352906935</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>TheAryanPublicAcademy@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/brochure" className="hover:text-school-gold transition-colors">Download Brochure</Link>
            <Link to="/admission" className="bg-school-gold text-school-blue px-4 py-1 rounded-full text-sm font-medium hover:bg-amber-400 transition-all">
              Admissions Open 2024-25
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 w-full bg-white ${
          scrolled ? "shadow-md py-2" : "py-4"
        } transition-all duration-300`}
      >
        <div className="container-custom">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-school-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                AP
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-school-blue leading-tight">
                  The Aryan Public
                  <span className="block text-lg md:text-xl text-school-dark">Academy</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-school-accent ${
                    location.pathname === link.path
                      ? "text-school-accent"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X size={24} className="text-school-blue" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="bg-white h-full w-3/4 shadow-xl pt-20 px-6">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`p-2 font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-school-accent"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link 
                  to="/brochure" 
                  className="block p-2 font-medium text-gray-700"
                >
                  Download Brochure
                </Link>
                <Link 
                  to="/admission" 
                  className="block p-2 font-medium text-school-gold"
                >
                  Admissions Open 2024-25
                </Link>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center mb-2">
                  <Phone size={16} className="mr-2" />
                  9352906935
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Mail size={16} className="mr-2" />
                  TheAryanPublicAcademy@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* Overlay */}
          <div
            className="bg-black bg-opacity-50 h-full w-full absolute"
            onClick={toggleMenu}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
