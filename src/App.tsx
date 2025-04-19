import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState, useEffect, memo } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { optimizePage, preloadPages, trackPageNavigation } from './utils/pageOptimization';
import { ensureAssets, preloadImages } from './utils/assetUtils';
import { routerOptions } from './router-config';

// Import only the essential components initially
// Navbar and Footer are critical path components that should be loaded immediately
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
// Import Home directly for fastest initial load
import HomeComponent from './pages/Home';

// Extend Home component with preload property
interface ExtendedComponent extends React.FC {
  preload?: () => void;
}

// Create an extended Home component with preload capability
const Home: ExtendedComponent = HomeComponent;

// Preload critical assets at app startup
ensureAssets();

// Preload Home page specific images
preloadImages(['assets/images/laempresa.png', 'assets/hero-bg.webp']);

// Set up preload method for other pages directly on Home component
Home.preload = () => {
  preloadPages([
    () => import('./pages/About'),
    () => import('./pages/Services'),
    () => import('./pages/Portfolio'),
    () => import('./pages/Contact')
  ]);
};

// Optimize other pages with different loading priorities
const About = optimizePage(() => import('./pages/About'), {
  priority: 'high',
  preloadImages: ['./assets/about-hero.webp']
});

const Services = optimizePage(() => import('./pages/Services'), {
  priority: 'high',
  preloadImages: ['./assets/services-hero.webp']
});

const Portfolio = optimizePage(() => import('./pages/Portfolio'), {
  priority: 'high'
});

const Contact = optimizePage(() => import('./pages/Contact'), {
  priority: 'medium'
});

// Create a smarter loading manager with optimized progress tracking
const useLoadingManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Record the start time for performance measurement
    performance.mark('app-init-start');
    
    const startTime = Date.now();
    // Shorter minimum loading time for better perceived performance
    const minLoadTime = 400; // Reduced from 600ms to 400ms for faster startup
    const maxLoadTime = 1000; // Reduced from 1500ms to 1000ms
    
    // Hide any browser-native loader elements immediately
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.opacity = '1';
    }
    
    // More rapid progress steps for faster perceived loading
    const steps = [
      { at: 0.3, delay: 20 },     // 30% - Initial setup (faster initial progress)
      { at: 0.6, delay: 30 },     // 60% - Loading critical assets
      { at: 0.9, delay: 20 },     // 90% - Final preparations
      { at: 1.0, delay: 0 }       // 100% - Complete
    ];
    
    // Process loading steps
    let stepIndex = 0;
    
    const processNextStep = () => {
      if (stepIndex < steps.length) {
        const step = steps[stepIndex];
        setProgress(Math.floor(step.at * 100));
        stepIndex++;
        
        if (stepIndex < steps.length) {
          setTimeout(processNextStep, step.delay);
        } else {
          // Check if minimum time has passed
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minLoadTime - elapsedTime);
          
          // Finish loading after minimum time has passed
          setTimeout(() => {
            setIsLoading(false);
            // Mark the end of initial loading for performance measurement
            performance.mark('app-init-end');
            performance.measure('app-init-time', 'app-init-start', 'app-init-end');
            
            // After app is initialized, preload other pages
            if (Home.preload) {
              Home.preload();
            }
            
            // Log performance for debugging
            if (process.env.NODE_ENV === 'development') {
              const measure = performance.getEntriesByName('app-init-time')[0];
              console.log('App init time:', measure.duration.toFixed(2), 'ms');
            }
          }, remainingTime);
        }
      }
    };
    
    // Start processing steps immediately
    processNextStep();
    
    // Fallback to ensure loading finishes even if steps fail
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, maxLoadTime);
    
    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);
  
  return { isLoading, progress };
};

// Optimize navbar loading with suspense and initial placeholder
const NavbarWithSuspense = () => (
  <Suspense fallback={
    <div className="fixed top-0 left-0 w-full h-16 bg-dark-surface/80 backdrop-blur-md z-40"></div>
  }>
    <Navbar />
  </Suspense>
);

// Optimize footer loading with suspense and initial placeholder
const FooterWithSuspense = () => (
  <Suspense fallback={<div className="h-40 bg-dark-surface mt-auto"></div>}>
    <Footer />
  </Suspense>
);

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Track page navigation for performance monitoring
  useEffect(() => {
    const pageName = location.pathname.replace(/\//g, '') || 'home';
    trackPageNavigation(pageName);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingScreen isLoading={true} progress={50} />}>
            <PageTransition>
              <About />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/services" element={
          <Suspense fallback={<LoadingScreen isLoading={true} progress={50} />}>
            <PageTransition>
              <Services />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/portfolio" element={
          <Suspense fallback={<LoadingScreen isLoading={true} progress={50} />}>
            <PageTransition>
              <Portfolio />
            </PageTransition>
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<LoadingScreen isLoading={true} progress={50} />}>
            <PageTransition>
              <Contact />
            </PageTransition>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

// Memoize the ThemedApp component to prevent unnecessary re-renders
const ThemedApp = memo(() => {
  const { isLoading, progress } = useLoadingManager();
  
  return (
    <div className="min-h-screen font-body transition-colors duration-300 flex flex-col bg-dark-background text-dark-textPrimary">
      <LoadingScreen isLoading={isLoading} progress={progress} />
      <NavbarWithSuspense />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <FooterWithSuspense />
    </div>
  );
});

ThemedApp.displayName = 'ThemedApp';

/**
 * Main App component with theme provider
 */
function App() {
  return (
    <ThemeProvider>
      <Router future={routerOptions.future}>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
}

export default App;