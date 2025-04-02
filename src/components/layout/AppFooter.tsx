
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const AppFooter = () => {
  return (
    <footer className="bg-clinic-secondary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and description */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center mr-3">
                <span className="text-clinic-primary font-bold text-xl">SC</span>
              </div>
              <span className="text-xl font-bold">Smart Clinic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing excellent healthcare services with a focus on patient comfort and advanced medical technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">General Checkup</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cardiac Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Dental Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pediatrics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Diagnostics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Healthcare Blvd, Medical City, CA 90001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contact@smartclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Smart Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
