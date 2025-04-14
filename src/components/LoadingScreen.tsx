import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, progress }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: isDark ? 'rgba(10, 10, 15, 0.8)' : 'rgba(255, 255, 255, 0.8)' 
      }}
    >
      <div
        className={`${
          isDark ? 'bg-dark-surface/70' : 'bg-light-surface/70'
        } p-10 rounded-2xl shadow-2xl flex flex-col items-center max-w-md mx-auto border border-dark-primaryAccent/20`}
      >
        {/* Brand logo spinner */}
        <div className="relative w-28 h-28 mb-8">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-dark-primaryAccent/30"
          />
          <motion.div
            className="absolute inset-0 border-t-4 border-r-4 border-dark-primaryAccent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              LE
            </span>
          </motion.div>
        </div>
        
        {/* Loading text with animation */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-medium mb-4 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent"
        >
          Loading Experience
        </motion.h3>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent"
            initial={{ width: "0%" }}
            animate={{ width: progress ? `${progress}%` : "100%" }}
            transition={{ 
              duration: progress ? 0.3 : 2.5,
              ease: "easeInOut",
              delay: 0.1
            }}
          />
        </div>
        
        {/* Loading animation dots */}
        <div className="flex space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-dark-primaryAccent"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 