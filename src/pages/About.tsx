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
  Rocket
} from 'lucide-react';
import { useTheme } from '../components/ThemeContext';
import { useEffect } from 'react';

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
      description: "Official launch of La Empresa, offering premium web development services."
    },
    {
      year: "Q2 2025",
      title: "UI/UX Design",
      description: "Expansion of our service offerings to include comprehensive UI/UX design packages."
    },
    {
      year: "Q3 2025",
      title: "Mobile App Dev",
      description: "Launch of our mobile application development services for iOS and Android platforms."
    },
    {
      year: "Q4 2025",
      title: "Custom Solutions",
      description: "Introduction of bespoke software development for enterprise clients."
    }
  ];

  return (
    <div className="pt-16">
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
              Innovation Starts Here
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Founded by a team of passionate digital creators, La Empresa is a new digital studio preparing to transform the way businesses approach digital solutions.
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
                  Digital Excellence at Scale
                </span>
              </h2>
              <p className={`mb-6 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                We envision a world where businesses of all sizes have access to exceptional digital solutions that drive growth, enhance user experiences, and create lasting impact.
              </p>
              <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                La Empresa aims to be the leading digital partner for forward-thinking businesses, known for our innovative approach, technical excellence, and exceptional client outcomes.
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
                  Bridge Ideas to Impact
                </span>
              </h2>
              <p className={`mb-6 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                To empower businesses by transforming innovative ideas into high-performing digital products that solve real-world problems and create meaningful connections with users.
              </p>
              <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                We're committed to delivering scalable, user-centered solutions through collaborative partnerships, cutting-edge technology, and a relentless focus on quality.
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
              Our core values shape our approach and define how we work with clients and each other
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
              Our structured approach ensures we deliver exceptional results, on time and within budget
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
                  <Users className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  We create user-centered designs that balance aesthetic appeal with functional excellence to deliver exceptional experiences.
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
                <h3 className="text-xl font-bold mb-4">Development</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  Our skilled developers bring designs to life using clean, efficient code and cutting-edge technologies.
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
                  <Rocket className="h-8 w-8 text-dark-primaryAccent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Launch & Support</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  We ensure smooth deployment and provide ongoing support to help your digital solution evolve and grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              OUR ROADMAP
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Building the Future
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Our journey is just beginning - here's what's on the horizon for 2025
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

      {/* CTA Section */}
      <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/30'}`}>
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              JOIN OUR JOURNEY
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Be Part of Our Story
              </span>
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Ready to transform your digital presence? Connect with us to learn more about our launch plans and how we can help your business thrive.
            </p>
            
            <Link
              to="/contact"
              className="group px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 inline-flex items-center"
            >
              <span>Connect With Us</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;