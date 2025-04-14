import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Page transition component with optimized animations
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Exit animation finishes before enter animation starts
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 8,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1], // Material design standard ease
      }
    },
    out: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 1, 1], // Quick exit
      }
    }
  };

  // Optional layout transition for content that changes size
  const layoutTransition = {
    type: "spring",
    stiffness: 500,
    damping: 50,
    mass: 1
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      layoutTransition={layoutTransition}
      className="page w-full"
    >
      {children}
    </motion.div>
  );
};

export default React.memo(PageTransition); 