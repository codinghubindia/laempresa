import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target,  
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  Star,
  Lightbulb,
  Code,
  Users,
  Rocket,
  CheckCircle,
  BadgePercent,
  Mail,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../components/ThemeContext';
import { useEffect } from 'react';
import SEO from '../components/SEO';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-dark-primaryAccent" />,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with our clients to understand their needs and deliver solutions that exceed expectations."
    },
    {
      icon: <Target className="h-8 w-8 text-dark-primaryAccent" />,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex challenges and deliver cutting-edge solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-dark-primaryAccent" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication, ensuring exceptional results."
    }
  ];

  const roadmap = [
    {
      year: "Q1 2025",
      title: "Grand Launch",
      description: "Official launch of our premium web development services with 75% market price discounts."
    },
    {
      year: "Q2 2025",
      title: "UI/UX Design",
      description: "Expansion of our service offerings to include comprehensive UI/UX design packages at the same competitive rates."
    },
    {
      year: "Q3 2025",
      title: "Mobile App Dev",
      description: "Launch of our mobile application development services for iOS and Android platforms."
    },
    {
      year: "Q4 2025",
      title: "Custom Solutions",
      description: "Introduction of bespoke software development for enterprise clients without enterprise prices."
    }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="About Us | Premium Digital Solutions"
        description="Learn about our mission to deliver premium digital solutions at prices up to 75% below market rates. Discover our values, vision, and approach."
        keywords="about us, web development company, affordable digital agency, premium websites, discounted web services"
      />
      
      {/* Hero Section */}
      <section className={`relative py-24 ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              OUR STORY
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Premium Quality, Affordable Prices
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Founded by a team of passionate digital creators, we're revolutionizing the industry by delivering top-tier solutions at prices up to 75% below market rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6 self-start">
                <Star className="h-4 w-4" />
                OUR VISION
              </div>
              <h2 className="text-3xl font-headline font-bold mb-6">
                <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                  Digital Excellence at Affordable Prices
                </span>
              </h2>
              <p className={`mb-6 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                We envision a world where businesses of all sizes have access to exceptional digital solutions that drive growth, enhance user experiences, and create lasting impact - without breaking the bank.
              </p>
              <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                We aim to be the leading digital partner for cost-conscious businesses, known for our innovative approach, technical excellence, and exceptional client outcomes at prices up to 75% below industry standards.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6 self-start">
                <Globe className="h-4 w-4" />
                OUR MISSION
              </div>
              <h2 className="text-3xl font-headline font-bold mb-6">
                <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                  Bridge Ideas to Impact, Affordably
                </span>
              </h2>
              <p className={`mb-6 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                To empower businesses by transforming innovative ideas into high-performing digital products that solve real-world problems and create meaningful connections with users - at prices up to 75% below market rates.
              </p>
              <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                We're committed to delivering scalable, user-centered solutions through collaborative partnerships, cutting-edge technology, and a relentless focus on quality without expensive overhead costs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              OUR VALUES
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                The Principles That Guide Us
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Our core values shape our approach and define how we deliver premium solutions at affordable prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-xl p-8 ${
                  isDark 
                    ? 'bg-dark-background/70' 
                    : 'bg-light-background/70'
                } transition-all duration-300 border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30`}
              >
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              OUR METHOD
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                How We Transform Ideas into Reality
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Our structured approach ensures we deliver exceptional results, on time and within budget - always at prices up to 75% below market rates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-xl p-8 border border-dark-primaryAccent/20 ${
                isDark ? 'bg-dark-background/80' : 'bg-light-background/80'
              }`}>
                <div className="absolute -top-5 -left-5">
                  <div className="w-10 h-10 rounded-full bg-dark-primaryAccent flex items-center justify-center text-dark-background font-bold">
                    1
                  </div>
                </div>
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  <Lightbulb className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  We begin by understanding your business, goals, and users. This deep-dive helps us align our solutions with your vision.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-xl p-8 border border-dark-primaryAccent/20 ${
                isDark ? 'bg-dark-background/80' : 'bg-light-background/80'
              }`}>
                <div className="absolute -top-5 -left-5">
                  <div className="w-10 h-10 rounded-full bg-dark-primaryAccent flex items-center justify-center text-dark-background font-bold">
                    2
                  </div>
                </div>
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  <Rocket className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  We develop a comprehensive plan that outlines the technical approach, timeline, and deliverables to achieve your objectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-xl p-8 border border-dark-primaryAccent/20 ${
                isDark ? 'bg-dark-background/80' : 'bg-light-background/80'
              }`}>
                <div className="absolute -top-5 -left-5">
                  <div className="w-10 h-10 rounded-full bg-dark-primaryAccent flex items-center justify-center text-dark-background font-bold">
                    3
                  </div>
                </div>
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  <Code className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Creation</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  Our skilled team builds your solution using modern technologies and best practices, with regular updates and feedback cycles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-xl p-8 border border-dark-primaryAccent/20 ${
                isDark ? 'bg-dark-background/80' : 'bg-light-background/80'
              }`}>
                <div className="absolute -top-5 -left-5">
                  <div className="w-10 h-10 rounded-full bg-dark-primaryAccent flex items-center justify-center text-dark-background font-bold">
                    4
                  </div>
                </div>
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-6">
                  <Users className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Launch & Support</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  We ensure a smooth deployment and provide ongoing support to help you maximize the value of your new digital asset.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className={`py-16 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`py-8 px-6 rounded-2xl ${
              isDark ? 'bg-dark-primaryAccent/20' : 'bg-dark-primaryAccent/10'
            } border border-dark-primaryAccent/30 text-center`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <BadgePercent className="h-6 w-6 text-dark-primaryAccent" />
              <h3 className="text-xl md:text-2xl font-bold text-dark-primaryAccent">
                Limited Time Offer: 75% OFF All Services
              </h3>
              <BadgePercent className="h-6 w-6 text-dark-primaryAccent" />
            </div>
            <p className={`text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Experience premium quality digital solutions at a fraction of the cost. Our special launch pricing offers up to 75% off standard market rates without compromising on quality or delivery.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <span>View Our Pricing</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              FUTURE VISION
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Our 2025 Roadmap
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We're committed to expanding our offerings while maintaining our commitment to exceptional quality at affordable rates
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark-primaryAccent/20 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {roadmap.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  } mb-8`}
                >
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}>
                    <div className={`p-6 rounded-xl ${
                      isDark ? 'bg-dark-background/70' : 'bg-light-background/70'
                    } border border-dark-primaryAccent/10`}>
                      <span className="text-dark-primaryAccent font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark-primaryAccent rounded-full hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="py-24 relative overflow-hidden">
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
            viewport={{ once: true }}
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
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2" />
                <span className="text-dark-textSecondary text-sm">Fast Turnaround</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2" />
                <span className="text-dark-textSecondary text-sm">Expert Development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2" />
                <span className="text-dark-textSecondary text-sm">100% Satisfaction</span>
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
              
              <Link
                to="/contact"
                className="text-dark-primaryAccent inline-flex items-center hover:underline mt-2"
              >
                <span>Go to contact page</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;