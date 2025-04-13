import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useTheme } from './ThemeContext';
import lampresa from '../assets/images/laempresa.png';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`${
      isDark 
        ? 'bg-dark-background border-t border-dark-border text-dark-textPrimary' 
        : 'bg-light-background border-t border-dark-border/30 text-light-textPrimary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-16 w-16 mr-3 relative">
                <div className="absolute inset-0 rounded-full animate-pulse-slow bg-dark-primaryAccent/20 blur-md"></div>
                <img 
                  src= {lampresa}
                  alt="La Empresa Logo" 
                  className="h-full w-full object-contain relative z-10"
                />
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-headline font-semibold text-dark-primaryAccent drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]">La Empresa</span>
                <span className={`text-xs italic font-medium px-2 py-0.5 rounded-md inline-block ${
                  isDark ? 'bg-dark-primaryAccent/20 text-dark-primaryAccent border border-dark-primaryAccent/30' : 'bg-light-primaryAccent/20 text-dark-primaryAccent border border-dark-primaryAccent/30'
                }`}>Where Creativity Becomes Reality</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark 
                ? 'text-dark-textPrimary border-b border-dark-border pb-2' 
                : 'text-light-textPrimary border-b border-dark-border/30 pb-2'
            }`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-dark-primaryAccent hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.4)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-dark-primaryAccent hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.4)] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-dark-primaryAccent hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.4)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark 
                ? 'text-dark-textPrimary border-b border-dark-border pb-2' 
                : 'text-light-textPrimary border-b border-dark-border/30 pb-2'
            }`}>Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-dark-primaryAccent drop-shadow-[0_0_1px_rgba(212,175,55,0.5)]" />
                <a href="mailto:laempresa.team@gmail.com" className={isDark ? 'text-dark-textSecondary hover:text-dark-primary' : 'text-light-textSecondary hover:text-light-primary'}>
                  laempresa.team@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-dark-primaryAccent drop-shadow-[0_0_1px_rgba(212,175,55,0.5)]" />
                <a href="tel:+919483001434" className={isDark ? 'text-dark-textSecondary hover:text-dark-primary' : 'text-light-textSecondary hover:text-light-primary'}>
                  +91 9483001434
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-dark-primaryAccent drop-shadow-[0_0_1px_rgba(212,175,55,0.5)]" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>
                  BEML Layout, Ideal Homes Twp,<br/>Rajarajeshwari Nagar,<br/>Bengaluru, Karnataka 560098
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark 
                ? 'text-dark-textPrimary border-b border-dark-border pb-2' 
                : 'text-light-textPrimary border-b border-dark-border/30 pb-2'
            }`}>Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={`relative ${
                  isDark 
                    ? 'text-dark-textSecondary hover:text-dark-primaryAccent' 
                    : 'text-light-textSecondary hover:text-dark-primaryAccent'
                } transition-colors group`}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-dark-primaryAccent/20 blur-lg rounded-full -z-10 w-8 h-8 -m-1.5"></span>
                <Linkedin className="h-5 w-5 group-hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.6)]" />
              </a>
              <a 
                href="#" 
                className={`relative ${
                  isDark 
                    ? 'text-dark-textSecondary hover:text-dark-primaryAccent' 
                    : 'text-light-textSecondary hover:text-dark-primaryAccent'
                } transition-colors group`}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-dark-primaryAccent/20 blur-lg rounded-full -z-10 w-8 h-8 -m-1.5"></span>
                <Twitter className="h-5 w-5 group-hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.6)]" />
              </a>
              <a 
                href="#" 
                className={`relative ${
                  isDark 
                    ? 'text-dark-textSecondary hover:text-dark-primaryAccent' 
                    : 'text-light-textSecondary hover:text-dark-primaryAccent'
                } transition-colors group`}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-dark-primaryAccent/20 blur-lg rounded-full -z-10 w-8 h-8 -m-1.5"></span>
                <Github className="h-5 w-5 group-hover:drop-shadow-[0_0_2px_rgba(212,175,55,0.6)]" />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 ${
          isDark ? 'border-t border-dark-border' : 'border-t border-dark-border/30'
        }`}>
          <p className={`text-center text-sm ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}>
            © {new Date().getFullYear()} La Empresa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;