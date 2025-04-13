import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette,  
  CheckCircle, 
  Calendar, 
  Clock,
  ArrowRight,
  Globe,
  MapPin,
  BadgePercent,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

// Type definitions
type Region = {
  id: string;
  name: string;
  icon: React.ReactNode;
  currency: string;
  code: string;
};

type ExchangeRates = {
  [key: string]: number;
};

type Package = {
  name: string;
  subtitle: string;
  features: string[];
  timeline: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  popular: boolean;
};

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedRegion, setSelectedRegion] = useState<string>('north-america');
  const [userRegion, setUserRegion] = useState<string>('');
  const [isDetectingRegion, setIsDetectingRegion] = useState<boolean>(true);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [isLoadingRates, setIsLoadingRates] = useState<boolean>(true);

  // Get user's region based on their timezone or locale
  useEffect(() => {
    const detectUserRegion = async () => {
      setIsDetectingRegion(true);
      try {
        // Try to get region from browser timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let detectedRegion = 'india'; // Default fallback
        
        // Simple region detection based on timezone
        if (timezone.includes('America')) {
          detectedRegion = 'north-america';
        } else if (timezone.includes('Europe')) {
          detectedRegion = 'europe';
        } else if (timezone.includes('London') || timezone.includes('GMT')) {
          detectedRegion = 'uk';
        } else if (timezone.includes('Australia')) {
          detectedRegion = 'australia';
        } else if (timezone.includes('Dubai') || timezone.includes('UAE')) {
          detectedRegion = 'uae';
        } else if (timezone.includes('India') || timezone.includes('Asia/Kolkata')) {
          detectedRegion = 'india';
        }

        setUserRegion(detectedRegion);
        setSelectedRegion(detectedRegion);
      } catch (error) {
        console.error('Error detecting region:', error);
        // Fall back to India if detection fails
        setUserRegion('india');
        setSelectedRegion('india');
      } finally {
        setIsDetectingRegion(false);
      }
    };

    detectUserRegion();
  }, []);

  // Fetch exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      setIsLoadingRates(true);
      try {
        // Try first API key
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=005550d9fac54d53873072737348226d&base=USD`);
        
        if (!response.ok) {
          // If first API fails, try the second one
          const fallbackResponse = await fetch(`https://openexchangerates.org/api/latest.json?app_id=d6172f50fe8b44da89237bfadb34ebc4&base=USD`);
          
          if (!fallbackResponse.ok) {
            throw new Error('Both API requests failed');
          }
          
          const data = await fallbackResponse.json();
          if (data && data.rates) {
            setExchangeRates(data.rates);
          }
        } else {
          const data = await response.json();
          if (data && data.rates) {
            setExchangeRates(data.rates);
          }
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Fallback to hardcoded exchange rates
        setExchangeRates({
          'EUR': 0.93,
          'INR': 83.5,
          'USD': 1,
          'GBP': 0.79,
          'AUD': 1.52,
          'AED': 3.67
        });
      } finally {
        setIsLoadingRates(false);
      }
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regions: Region[] = [
    { id: 'india', name: 'India', icon: <MapPin className="h-4 w-4" />, currency: '₹', code: 'INR' },
    { id: 'north-america', name: 'North America', icon: <Globe className="h-4 w-4" />, currency: '$', code: 'USD' },
    { id: 'europe', name: 'Europe', icon: <Globe className="h-4 w-4" />, currency: '€', code: 'EUR' },
    { id: 'uk', name: 'United Kingdom', icon: <Globe className="h-4 w-4" />, currency: '£', code: 'GBP' },
    { id: 'australia', name: 'Australia', icon: <Globe className="h-4 w-4" />, currency: 'A$', code: 'AUD' },
    { id: 'uae', name: 'UAE', icon: <Globe className="h-4 w-4" />, currency: 'د.إ', code: 'AED' },
  ];

  // Get currency symbol for the selected region
  const getCurrencyForRegion = (regionId: string): string => {
    const region = regions.find(r => r.id === regionId);
    return region ? region.currency : '₹';
  };

  // Get currency code for region
  const getCurrencyCodeForRegion = (regionId: string): string => {
    const region = regions.find(r => r.id === regionId);
    return region ? region.code : 'INR';
  };

  // Standard packages with INR base prices
  const standardPackages: Package[] = [
    {
      name: "Starter",
      subtitle: "Perfect for personal brands & portfolios",
      features: [
        "1–3 Pages",
        "Responsive Design",
        "Contact Form",
        "Basic SEO Setup"
      ],
      timeline: "3–5 Days",
      originalPrice: 12000,
      discountedPrice: 4799,
      discount: "60% OFF",
      popular: false
    },
    {
      name: "Business Pro",
      subtitle: "Ideal for startups & small businesses",
      features: [
        "5–10 Pages",
        "Custom UI",
        "Blog or CMS Integration",
        "Contact & Quote Forms",
        "Performance Optimization"
      ],
      timeline: "7–14 Days",
      originalPrice: 30000,
      discountedPrice: 11999,
      discount: "60% OFF",
      popular: true
    },
    {
      name: "Enterprise Solution",
      subtitle: "For platforms & dashboard-based products",
      features: [
        "Full-stack Web App",
        "User Authentication",
        "Admin Panel",
        "API Integrations",
        "Deployment & CI/CD",
        "Priority Support"
      ],
      timeline: "3–6 Weeks",
      originalPrice: 120000,
      discountedPrice: 47999,
      discount: "60% OFF",
      popular: false
    }
  ];

  const upcomingServices = [
    {
      icon: <Code className="h-10 w-10 text-dark-primaryAccent" />,
      title: "Custom App Development",
      description: "End-to-end solutions for your SaaS, productivity tools, internal systems, or AI-powered platforms — built from scratch and scaled for success."
    },
    {
      icon: <Palette className="h-10 w-10 text-dark-primaryAccent" />,
      title: "UI/UX Design",
      description: "Conversion-focused, user-tested design systems and interfaces. Whether it's mobile, web, or enterprise — we make your product look and feel world-class."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-dark-primaryAccent" />,
      title: "Mobile App Development",
      description: "Native or cross-platform (Flutter), we create high-performance apps with pixel-perfect UI and smooth user flows."
    }
  ];

  // Convert price from INR to the selected region's currency
  const convertPrice = (priceINR: number, targetRegion: string): number => {
    if (!Object.keys(exchangeRates).length) {
      return priceINR; // If exchange rates aren't loaded yet, return original price
    }

    const targetCurrency = getCurrencyCodeForRegion(targetRegion);
    
    if (targetCurrency === 'INR') {
      return priceINR;
    }
    
    // First convert INR to USD (as exchange rates are based on USD)
    const inrToUsd = 1 / (exchangeRates['INR'] || 83.5);
    const priceUSD = priceINR * inrToUsd;
    
    // Then convert USD to target currency
    const rate = exchangeRates[targetCurrency];
    if (!rate) {
      return priceINR;
    }
    
    return priceUSD * rate;
  };

  // Format price with appropriate currency symbol
  const formatPrice = (price: number, regionId: string): string => {
    const currencySymbol = getCurrencyForRegion(regionId);
    const convertedPrice = convertPrice(price, regionId);
    
    // Format based on region
    if (regionId === 'india') {
      return `${currencySymbol} ${Math.round(convertedPrice).toLocaleString('en-IN')}`;
    } else if (regionId === 'uae') {
      return `${currencySymbol} ${Math.round(convertedPrice).toLocaleString('en')}`;
    } else {
      return `${currencySymbol}${Math.round(convertedPrice).toLocaleString('en')}`;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`relative py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              WHAT WE DO
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Digital Excellence, Delivered
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              At La Empresa, we craft powerful digital experiences that elevate your brand, streamline operations, and drive growth. Our mission is to bridge the gap between innovative ideas and high-performing digital products.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Current Services Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              <span className="block w-2 h-2 rounded-full bg-green-500"></span>
              CURRENTLY AVAILABLE
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">Web Development</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We build fast, responsive, and scalable websites tailored to your brand and business goals. From sleek marketing sites to robust web platforms — we handle it all.
            </p>
          </motion.div>

          {/* Launch Offer Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-12 py-5 px-6 rounded-2xl ${
              isDark ? 'bg-dark-primaryAccent/20' : 'bg-dark-primaryAccent/10'
            } border border-dark-primaryAccent/30 text-center`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <BadgePercent className="h-6 w-6 text-dark-primaryAccent" />
              <h3 className="text-xl md:text-2xl font-bold text-dark-primaryAccent">
                Launch Offer: 60% OFF All Packages
              </h3>
              <Sparkles className="h-6 w-6 text-dark-primaryAccent" />
            </div>
            <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Limited time offer to celebrate our launch! Lock in our best rates today before prices increase.
              <span className="block mt-2 text-dark-primaryAccent font-medium">Offer valid until June 30, 2025</span>
            </p>
          </motion.div>

          {userRegion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center"
            >
              <p className={`text-sm ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                Showing prices for your detected region: <span className="font-medium text-dark-primaryAccent">{regions.find(r => r.id === userRegion)?.name}</span>
              </p>
            </motion.div>
          )}

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRegion === region.id
                    ? 'bg-dark-primaryAccent text-dark-background'
                    : `${isDark ? 'bg-dark-surface/50' : 'bg-light-surface/50'} ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'} hover:bg-dark-primaryAccent/20 hover:text-dark-primaryAccent`
                }`}
              >
                {region.icon}
                {region.name} ({region.currency})
              </button>
            ))}
          </div>

          {isLoadingRates ? (
            <div className="text-center py-12">
              <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                Loading pricing information...
              </p>
            </div>
          ) : (
            /* Packages */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {standardPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`group rounded-xl overflow-hidden relative ${
                    isDark ? 'bg-dark-surface/50' : 'bg-light-surface/50'
                  } border ${pkg.popular ? 'border-dark-primaryAccent' : 'border-dark-primaryAccent/20'} hover:border-dark-primaryAccent transition-all duration-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-dark-primaryAccent text-dark-background text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute -top-5 -left-5">
                    <div className="bg-dark-primaryAccent text-dark-background text-xs font-bold px-3 py-1 rounded-br-lg rounded-tl-lg transform rotate-[-12deg]">
                      {pkg.discount}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark-primaryAccent mb-2">{pkg.name}</h3>
                    <p className={`mb-6 text-sm ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>{pkg.subtitle}</p>
                    
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-dark-textSecondary line-through">
                          {formatPrice(pkg.originalPrice, selectedRegion)}
                        </span>
                        <span className="bg-dark-primaryAccent/10 text-dark-primaryAccent text-xs px-2 py-1 rounded-full">
                          LAUNCH PRICE
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-dark-primaryAccent">
                        {formatPrice(pkg.discountedPrice, selectedRegion)}
                        {pkg.name === "Enterprise Solution" && "+"}
                      </div>
                </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                          <span className={isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                    
                    <div className="pt-6 border-t border-dark-border/20">
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-dark-primaryAccent mr-2" />
                        <span className={`text-sm ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>Timeline: {pkg.timeline}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-8 py-4 bg-dark-primaryAccent/5">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center justify-center w-full py-3 rounded-lg ${
                        pkg.popular 
                          ? 'bg-dark-primaryAccent text-dark-background hover:shadow-md' 
                          : 'text-dark-primaryAccent hover:text-dark-secondaryAccent'
                      } transition-all`}
                    >
                      <span>{pkg.popular ? 'Get started now' : 'Get started'}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
              </motion.div>
            ))}
            </div>
          )}

          <div className="text-center mt-16">
            <p className={`text-sm italic max-w-2xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              * All packages can be customized to your specific needs. Contact us for a detailed quote based on your project requirements. Promotional pricing is valid for a limited time.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Services Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              <Calendar className="h-4 w-4" />
              LAUNCHING SOON
          </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">Upcoming Services</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We're expanding to become your full-service digital partner. Here's what's coming:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {upcomingServices.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative rounded-xl p-8 border border-dashed border-dark-primaryAccent/30 ${
                  isDark ? 'bg-dark-background/70' : 'bg-light-background/70'
                }`}
              >
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-dark-primaryAccent/90 to-dark-secondaryAccent/90 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors"
                  >
                    <span>Get early access</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Evolve Section */}
      <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-72 h-72 rounded-full bg-dark-primaryAccent/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-dark-secondaryAccent/5 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Built to Evolve with You
              </span>
          </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Every solution we deliver is designed with scalability, performance, and growth in mind. Whether you're starting small or going big — La Empresa evolves with your vision.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <Link
              to="/contact"
              className="group px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group px-8 py-4 text-base font-medium rounded-full border border-dark-primaryAccent/60 text-dark-primaryAccent hover:border-dark-primaryAccent hover:bg-dark-primaryAccent/5 transition-all duration-300 flex items-center"
            >
              <span>Learn About Our Approach</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;