import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './components/ThemeContext';

// Create a themed app component that uses the theme
const ThemedApp = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen font-body transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-dark-background text-dark-textPrimary' 
        : 'bg-light-background text-light-textPrimary'
    }`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
}

export default App;