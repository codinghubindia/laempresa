import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Laptop,
  PenTool,
  Users,
  LineChart,
  CheckCircle,
  Search,
  Code,
  Rocket,
  Shield,
  Lock,
  Clock,
  Phone,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import lampresa from '../assets/images/laempresa.png';

// Motion variants for text animations
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

//////////////////////////
// Hero Section Component
//////////////////////////
const HeroSection = ({ isDark }: { isDark: boolean }) => {
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    controls.start((i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }));
  }, [controls]);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex flex-col justify-center ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}
      aria-label="Hero Section"
    >
      {/* Background Image & Animated Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={lampresa}
                alt="LaEmpresa Logo"
                className="max-w-[60%] max-h-[60%] object-contain opacity-75"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-dark-background/80' : 'bg-light-background/70'}`}></div>
            </motion.div>

            {/* Animated Overlays */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-full rounded-full bg-dark-primaryAccent/15 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -70, 70, 0], y: [0, 70, -70, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-dark-primaryAccent/20 blur-3xl"
              />
                <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
                className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-dark-secondaryAccent/10 blur-3xl"
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" aria-hidden="true"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            custom={0} 
            variants={textVariants}
            className="mb-6"
          >
            <span
              className="px-6 py-2 rounded-full text-sm font-medium bg-dark-primaryAccent/10 text-dark-primaryAccent"
              aria-label="Established date"
            >
              ESTABLISHED 2025
            </span>
          </motion.div>

          <motion.h1
            className={`text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight tracking-tight mb-6 ${
              isDark ? 'text-dark-textPrimary' : 'text-light-textPrimary'
            }`}
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            <span className="block mb-2">
              The Future of <span className="text-dark-primaryAccent relative z-10">Digital</span> is Here
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}>
              Pioneering digital solutions that propel your business into a new era of success
            </p>
          </motion.div>

          {/* Highlighted Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { text: "Innovative Strategies", icon: <Rocket className="h-4 w-4" /> },
              { text: "Custom Solutions", icon: <PenTool className="h-4 w-4" /> },
              { text: "Expert Team", icon: <Users className="h-4 w-4" /> }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'
                }`}
              >
                <span className="text-dark-primaryAccent">{feature.icon}</span>
                <span className={`text-sm font-medium ${
                  isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
                }`}>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={3} variants={textVariants} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 relative overflow-hidden flex items-center"
            >
              <span className="absolute inset-0 bg-dark-primaryAccent/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity rounded-full"></span>
              <span className="relative z-10">Get a Free Consultation</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>

            <Link
              to="/services"
              className="group px-8 py-4 text-lg font-medium rounded-full border-2 border-dark-primaryAccent/60 hover:border-dark-primaryAccent text-dark-primaryAccent hover:bg-dark-primaryAccent/5 transition-all duration-300 flex items-center"
            >
              <span className="relative z-10">Explore Services</span>
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-dark-textSecondary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-xs mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-dark-primaryAccent/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-dark-primaryAccent" />
        </motion.div>
      </motion.div>
      </section>
  );
};

//////////////////////////
// Services Section Component
//////////////////////////
const ServicesSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Tailored Digital Solutions
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
            From stunning websites to powerful web applications, we craft digital experiences that elevate your brand and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 ${
              isDark ? 'bg-dark-primary/5' : 'bg-light-primary/5'
            } border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <Laptop className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">Website Development</h3>
            </div>
            <p className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>
              Custom responsive websites that captivate your audience with eye-catching designs and seamless navigation, optimized for performance and search engines.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Responsive design for all devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>SEO-optimized structure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Fast loading speed</span>
              </li>
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center text-dark-primaryAccent mt-6 hover:text-dark-secondaryAccent transition-colors"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 ${
              isDark ? 'bg-dark-primary/5' : 'bg-light-primary/5'
            } border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <Code className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">Web Application Development</h3>
            </div>
            <p className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>
              Powerful, scalable web applications built with modern frameworks to solve complex business challenges and streamline operations.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Custom functionality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Secure user authentication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Cloud-based infrastructure</span>
              </li>
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center text-dark-primaryAccent mt-6 hover:text-dark-secondaryAccent transition-colors"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 ${
              isDark ? 'bg-dark-primary/5' : 'bg-light-primary/5'
            } border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <ShoppingCart className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">E-commerce Solutions</h3>
            </div>
            <p className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>
              Complete online stores that turn visitors into customers with intuitive shopping experiences and secure payment processing.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Product catalog management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Secure checkout process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>Multiple payment gateways</span>
              </li>
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center text-dark-primaryAccent mt-6 hover:text-dark-secondaryAccent transition-colors"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 rounded-full border border-dark-primaryAccent text-dark-primaryAccent hover:bg-dark-primaryAccent hover:text-dark-background transition-all duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

//////////////////////////
// Future Vision Section Component (Replaces Testimonials)
//////////////////////////
const FutureVisionSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className={`py-24 ${
      isDark ? 'bg-dark-background' : 'bg-light-background'
    }`} aria-label="Our Vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-4">
            OUR VISION
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
            Setting New Standards
            </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}>
            As we launch in 2025, we're committed to revolutionizing digital experiences
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              description: "We're not just following trends - we're creating them. Our approach combines cutting-edge technology with forward-thinking design principles.",
              icon: <Rocket className="h-10 w-10 text-dark-primaryAccent" />
            },
            {
              title: "Client Partnership",
              description: "We believe in true collaboration. Your success is our success, which is why we approach every project as a partnership rather than a transaction.",
              icon: <Users className="h-10 w-10 text-dark-primaryAccent" />
            },
            {
              title: "Measurable Results",
              description: "Great design isn't just about aesthetics. We focus on delivering solutions that drive real business outcomes and quantifiable results.",
              icon: <LineChart className="h-10 w-10 text-dark-primaryAccent" />
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`relative rounded-xl overflow-hidden shadow-lg ${
                isDark 
                  ? 'bg-dark-background/70' 
                  : 'bg-light-background/80'
              } transition-all duration-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] p-8`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent"></div>
              
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-dark-primaryAccent/10">
                  {pillar.icon}
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 text-center ${
                isDark ? 'text-dark-textPrimary' : 'text-light-textPrimary'
              }`}>{pillar.title}</h3>
              
              <p className={`text-center ${
                isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
              }`}>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors text-lg font-medium group"
          >
            <span>Learn more about our approach</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

//////////////////////////
// Process Section Component
//////////////////////////
const ProcessSection = ({ isDark }: { isDark: boolean }) => {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-dark-background" />,
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business goals, target audience, and market position to establish a strategic foundation.',
      benefits: ['Comprehensive market research', 'Competitive analysis', 'Business goals alignment'],
    },
    {
      icon: <PenTool className="h-6 w-6 text-dark-background" />,
      title: 'Strategy & Planning',
      description: 'Based on our research, we develop a tailored strategy that addresses your specific challenges and leverages opportunities.',
      benefits: ['Custom solution roadmap', 'Resource optimization', 'Timeline & milestone planning'],
    },
    {
      icon: <Code className="h-6 w-6 text-dark-background" />,
      title: 'Design & Development',
      description: 'Our expert team brings the strategy to life with cutting-edge design and development, focusing on results and user experience.',
      benefits: ['User-centered design', 'Responsive development', 'Quality assurance testing'],
    },
    {
      icon: <Rocket className="h-6 w-6 text-dark-background" />,
      title: 'Launch & Growth',
      description: "We don't just deliver a product – we ensure it performs, monitor results, and optimize for continuous improvement.",
      benefits: ['Smooth deployment', 'Performance monitoring', 'Ongoing optimization'],
    },
  ];

  return (
    <section className={`py-24 ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/50'}`} aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-4">
            OUR APPROACH
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
            Excellence in Motion
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}>
            Our signature process transforms complex challenges into streamlined success stories
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-dark-primaryAccent/20 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                aria-labelledby={`process-step-${index}`}
              >
                {/* Spacer for proper alignment */}
                <div className="flex-1 hidden md:block"></div>
                
                {/* Center Icon */}
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent flex items-center justify-center text-dark-background font-bold text-lg z-10 mx-auto mb-4 md:mb-0">
                    {step.icon}
                  </div>
                  <div className="absolute h-16 w-16 rounded-full bg-dark-primaryAccent/20 blur-md"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className={`ml-0 ${index % 2 === 1 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                    <div className={`p-6 rounded-xl ${
                      isDark 
                        ? 'bg-dark-background/70' 
                        : 'bg-light-background/80'
                    } shadow-lg`}>
                      <h3 id={`process-step-${index}`} className="text-2xl font-bold mb-4 text-dark-primaryAccent">
                        {step.title}
                      </h3>
                      <p className={`mb-6 ${
                        isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
                      }`}>
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className={`flex items-center ${
                              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
                            } ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                          >
                            <CheckCircle className={`h-4 w-4 text-dark-primaryAccent ${
                              index % 2 === 1 ? 'md:order-2 md:ml-2' : 'mr-2'
                            }`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>
  );
};

//////////////////////////
// CTA Section Component
//////////////////////////
const CTASection = ({ }: { isDark: boolean }) => {
  return (
    <section className="py-24 relative overflow-hidden" aria-label="Call to Action">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-background via-dark-background/95 to-dark-background/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-dark-primaryAccent/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-dark-secondaryAccent/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-soft-light"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/20 text-dark-primaryAccent mb-6">
            START YOUR JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-dark-textPrimary drop-shadow-[0_0_1px_rgba(245,245,245,0.3)]">
            Ready to <span className="text-dark-primaryAccent">Dominate</span> Your Market?
            </h2>
          <p className="text-xl mb-10 text-dark-textSecondary">
            One conversation can revolutionize your business trajectory — let's make it happen
          </p>
          
          {/* Trust indicators */}
          <div className="mb-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-dark-primaryAccent mr-2" />
              <span className="text-dark-textSecondary text-sm">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-dark-primaryAccent mr-2" />
              <span className="text-dark-textSecondary text-sm">Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-dark-primaryAccent mr-2" />
              <span className="text-dark-textSecondary text-sm">24/7 Support</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-dark-primaryAccent/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity rounded-full"></span>
              <span className="relative z-10">Schedule a Free Consultation</span>
              <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-full border border-dark-primaryAccent/30 hover:border-dark-primaryAccent text-dark-primaryAccent transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <Phone className="h-5 w-5" />
              <span className="relative z-10">Call Us Now</span>
            </Link>
          </div>
          </motion.div>
        </div>
      </section>
  );
};

//////////////////////////
// Home Component (Wrapper)
//////////////////////////
const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-0">
      <HeroSection isDark={isDark} />
      <ServicesSection isDark={isDark} />
      <FutureVisionSection isDark={isDark} />
      <ProcessSection isDark={isDark} />
      <CTASection isDark={isDark} />
    </div>
  );
};

export default Home;