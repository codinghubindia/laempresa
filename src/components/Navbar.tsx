import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import lampresa from '../assets/images/laempresa.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Shared animation for active indicator
  const activeIndicator = {
    hidden: { width: 0, left: '50%', right: '50%' },
    visible: { width: '100%', left: 0, right: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-background/95 backdrop-blur-md shadow-lg'
        : 'bg-dark-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-16 w-16 md:h-20 md:w-20"
              >
                <div className="absolute inset-0 rounded-full animate-pulse-slow bg-dark-primaryAccent/20 blur-lg"></div>
                <img 
                  src={lampresa} 
                  alt="La Empresa Logo" 
                  className="h-full w-full object-contain relative z-10"
                />
              </motion.div>
              <div className="ml-3">
                <span className="block text-2xl md:text-3xl font-headline font-semibold text-dark-primaryAccent drop-shadow-[0_0_3px_rgba(212,175,55,0.5)]">
                  La Empresa
                </span>
                <span className="text-xs md:text-sm italic font-medium px-3 py-1 rounded-md bg-dark-primaryAccent/20 text-dark-primaryAccent border border-dark-primaryAccent/30">
                  Where Creativity Becomes Reality
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 text-dark-textPrimary hover:text-dark-primaryAccent ${isActive('/') ? 'text-dark-primaryAccent' : ''} transition-colors`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-primaryAccent"
                  initial="hidden"
                  animate="visible"
                  variants={activeIndicator}
                  layoutId="navbar-underline"
                />
              )}
            </Link>
            <Link
              to="/about"
              className={`relative px-3 py-2 text-dark-textPrimary hover:text-dark-primaryAccent ${isActive('/about') ? 'text-dark-primaryAccent' : ''} transition-colors`}
            >
              About
              {isActive('/about') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-primaryAccent"
                  initial="hidden"
                  animate="visible"
                  variants={activeIndicator}
                  layoutId="navbar-underline"
                />
              )}
            </Link>
            <Link
              to="/services"
              className={`relative px-3 py-2 text-dark-textPrimary hover:text-dark-primaryAccent ${isActive('/services') ? 'text-dark-primaryAccent' : ''} transition-colors`}
            >
              Services
              {isActive('/services') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-primaryAccent"
                  initial="hidden"
                  animate="visible"
                  variants={activeIndicator}
                  layoutId="navbar-underline"
                />
              )}
            </Link>
            <Link
              to="/portfolio"
              className={`relative px-3 py-2 text-dark-textPrimary hover:text-dark-primaryAccent ${isActive('/portfolio') ? 'text-dark-primaryAccent' : ''} transition-colors`}
            >
              Portfolio
              {isActive('/portfolio') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-dark-primaryAccent"
                  initial="hidden"
                  animate="visible"
                  variants={activeIndicator}
                  layoutId="navbar-underline"
                />
              )}
            </Link>
            <Link
              to="/contact"
              className="relative group px-6 py-2.5 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            >
              <span className="relative z-10">Contact Us</span>
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-dark-primaryAccent/20"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-dark-primaryAccent/10 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-dark-textPrimary" />
              ) : (
                <Menu className="h-6 w-6 text-dark-textPrimary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-background shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg text-dark-textPrimary hover:bg-dark-primaryAccent/10 ${isActive('/') ? 'bg-dark-primaryAccent/10 text-dark-primaryAccent' : ''} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg text-dark-textPrimary hover:bg-dark-primaryAccent/10 ${isActive('/about') ? 'bg-dark-primaryAccent/10 text-dark-primaryAccent' : ''} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-4 py-3 rounded-lg text-dark-textPrimary hover:bg-dark-primaryAccent/10 ${isActive('/services') ? 'bg-dark-primaryAccent/10 text-dark-primaryAccent' : ''} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`block px-4 py-3 rounded-lg text-dark-textPrimary hover:bg-dark-primaryAccent/10 ${isActive('/portfolio') ? 'bg-dark-primaryAccent/10 text-dark-primaryAccent' : ''} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-lg bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;