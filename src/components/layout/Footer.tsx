
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-school-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-school-blue text-xl font-bold">
                AP
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  The Aryan Public
                  <span className="block text-lg text-school-gold">Academy</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              A premier educational institution dedicated to nurturing young minds and building the leaders of tomorrow through quality education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-school-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-school-gold">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/brochure" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2 text-school-gold" />
                  Download Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-school-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-school-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Bhagwati Nagar, A, Niwaru, Lalchandpura Road, Jhotwara, Jaipur
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-school-gold flex-shrink-0" />
                <span className="text-gray-300">9352906935</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-school-gold flex-shrink-0" />
                <span className="text-gray-300">TheAryanPublicAcademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} The Aryan Public Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
