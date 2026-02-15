import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center text-white mb-6">
              <Leaf className="h-8 w-8 mr-3 text-gold-500" />
              <span className="text-2xl font-serif font-bold tracking-tight">Tyrone <span className="text-gold-500 italic">Edwards</span></span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Professional landscaping and garden maintenance services in Alexandra Hills, QLD. We transform outdoor spaces with quality and care.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584918212288"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-earth-900 transition-all font-bold"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link to={NavigationLinks.HOME} className="text-gray-400 hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to={NavigationLinks.SERVICES} className="text-gray-400 hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to={NavigationLinks.PROJECTS} className="text-gray-400 hover:text-gold-500 transition-colors">Projects</Link></li>
              <li><Link to={NavigationLinks.ABOUT} className="text-gray-400 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to={NavigationLinks.CONTACT} className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <MapPin className="text-gold-500 mr-4 shrink-0 mt-1 transition-transform group-hover:scale-110" size={20} />
                <span className="text-gray-400 text-sm">Alexandra Hills, QLD 4161, Australia</span>
              </li>
              <li className="flex items-center group">
                <Phone className="text-gold-500 mr-4 shrink-0 transition-transform group-hover:scale-110" size={20} />
                <a href="tel:0400000000" className="text-gray-400 hover:text-gold-500 transition-colors font-bold tracking-wider text-sm">0400 000 000</a>
              </li>
              <li className="flex items-center group">
                <Mail className="text-gold-500 mr-4 shrink-0 transition-transform group-hover:scale-110" size={20} />
                <a href="mailto:tyrone@tyroneedwardslandscaping.com.au" className="text-gray-400 hover:text-gold-500 transition-colors text-xs">tyrone@tyroneedwardslandscaping.com.au</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Tyrone Edwards. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={NavigationLinks.HOME} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to={NavigationLinks.HOME} className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;