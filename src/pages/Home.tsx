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
  ShoppingCart,
  Star,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import lampresa from '../assets/images/laempresa.png';
import PortfolioSectionComponent from '../components/PortfolioSection';
import TestimonialsSectionComponent from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

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
const HeroSection = () => {
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
      className="relative min-h-screen flex flex-col justify-center bg-dark-background"
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
              <div className="absolute inset-0 bg-dark-background/80"></div>
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
              PREMIUM DIGITAL SOLUTIONS
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight tracking-tight mb-6 text-dark-textPrimary"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            <span className="block mb-2">
              Launch Your Brand With A <span className="text-dark-primaryAccent relative z-10">Stunning Website</span> In Just 72 Hours
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            <p className="text-dark-textSecondary text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Elevate your digital presence with our expert team's tailored solutions that drive real business growth
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
              { text: "72-Hour Turnaround", icon: <Clock className="h-4 w-4" /> },
              { text: "100% Satisfaction Guarantee", icon: <Shield className="h-4 w-4" /> },
              { text: "Expert Team", icon: <Users className="h-4 w-4" /> }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-dark-surface/30"
              >
                <span className="text-dark-primaryAccent">{feature.icon}</span>
                <span className="text-sm font-medium text-dark-textSecondary">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={3} variants={textVariants} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 relative overflow-hidden flex items-center"
            >
              <span className="absolute inset-0 bg-dark-primaryAccent/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity rounded-full"></span>
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>

            <Link
              to="/portfolio"
              className="group px-8 py-4 text-lg font-medium rounded-full border-2 border-dark-primaryAccent/60 hover:border-dark-primaryAccent text-dark-primaryAccent hover:bg-dark-primaryAccent/5 transition-all duration-300 flex items-center"
            >
              <span className="relative z-10">View Portfolio</span>
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Quick Access */}
      <motion.div 
        className="absolute bottom-10 right-10 md:flex hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <Link
          to="/contact"
          className="group rounded-full p-4 bg-dark-primaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          <Phone className="h-6 w-6" />
          <span className="sr-only">Contact Us</span>
        </Link>
      </motion.div>

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
// Future Vision Section Component
//////////////////////////
const FutureVisionSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="py-24 bg-dark-background" aria-label="Our Vision">
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
          <p className="text-lg max-w-2xl mx-auto text-dark-textSecondary">
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
    <section className="py-24 bg-dark-surface/20" aria-label="Our Process">
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
          <p className="text-lg max-w-2xl mx-auto text-dark-textSecondary">
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
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/20 text-dark-primaryAccent mb-6">
            LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-dark-textPrimary drop-shadow-[0_0_1px_rgba(245,245,245,0.3)]">
            Premium Quality at <span className="text-dark-primaryAccent">75% OFF</span>
          </h2>
          <p className="text-xl mb-10 text-dark-textSecondary">
            Get a high-performance website or application at a fraction of the market price — without compromising on quality
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
              <span className="text-dark-textSecondary text-sm">Fast Turnaround</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-dark-primaryAccent/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity rounded-full"></span>
              <Mail className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Get Your Free Consultation</span>
              <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            
            <p className="text-dark-textSecondary mt-6">
              Fill out our detailed form to get the most accurate quote for your project
            </p>
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
      <SEO 
        title="Premium Digital Solutions"
        description="Launch your brand with a stunning website in just 72 hours. We offer expert web development, application design, and e-commerce solutions to elevate your business."
        keywords="web design, website development, e-commerce, web application, UI/UX design, fast turnaround, digital solutions"
      />
      <HeroSection />
      <ServicesSection isDark={isDark} />
      <PortfolioSectionComponent />
      <TestimonialsSectionComponent />
      <FutureVisionSection isDark={isDark} />
      <ProcessSection isDark={isDark} />
      <CTASection isDark={isDark} />
    </div>
  );
};

export default Home;