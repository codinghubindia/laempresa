import React, { useEffect } from 'react';
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
  Users,
  LineChart,
  ShoppingCart,
  Server,
  Bolt,
  Shield,
  Zap,
  Braces,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import SEO from '../components/SEO';

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core services
  const coreServices = [
    {
      id: "websites",
      title: "Website Development",
      description: "Custom responsive websites built to engage audiences, drive conversions, and strengthen brand authority — optimized for speed, SEO, and modern UX.",
      icon: <Globe className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "SEO-friendly architecture",
        "Content management systems",
        "Analytics integration"
      ]
    },
    {
      id: "web-apps",
      title: "Web Application Development",
      description: "Powerful, scalable web apps tailored to specific business needs, using modern frameworks and APIs to streamline operations and user workflows.",
      icon: <Code className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Custom business logic implementation",
        "API development and integration",
        "Real-time functionality",
        "Authentication systems",
        "Progressive web app capabilities"
      ]
    },
    {
      id: "e-commerce",
      title: "E-commerce Platform Development",
      description: "Robust online stores with advanced product management, secure checkout systems, customer account portals, and analytics integration.",
      icon: <ShoppingCart className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Advanced product catalog management",
        "Secure payment processing",
        "User account systems",
        "Order management workflows",
        "Inventory synchronization"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Platforms",
      description: "Medical appointment scheduling systems, telemedicine portals, patient record management — fully HIPAA-compliant where needed.",
      icon: <Users className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Secure appointment scheduling",
        "Telemedicine integration",
        "Patient record management",
        "HIPAA compliance measures",
        "Healthcare provider portals"
      ]
    },
    {
      id: "crm",
      title: "CRM Systems",
      description: "Complete customer relationship management solutions featuring lead scoring, task management, analytics dashboards, and automation workflows.",
      icon: <LineChart className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Lead tracking and management",
        "Task automation workflows",
        "Performance analytics dashboards",
        "Email integration",
        "Customer data management"
      ]
    },
    {
      id: "form-builder",
      title: "Form and Data Platforms",
      description: "Drag-and-drop form builders with conditional logic, customizable templates, file upload support, and deep analytics capabilities.",
      icon: <CheckCircle className="h-12 w-12 text-dark-primaryAccent" />,
      features: [
        "Intuitive form builder interfaces",
        "Conditional logic implementation",
        "File upload capabilities",
        "Data visualization tools",
        "Response analytics"
      ]
    }
  ];

  // Technology stack section
  const techStacks = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Next.js", "Angular", "Tailwind CSS", "Material UI", "TypeScript"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Django", "Laravel", "Spring Boot", "ASP.NET Core"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
    },
  ];

  // Upcoming services
  const upcomingServices = [
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications for iOS and Android with offline capabilities, push notifications, and seamless API integration.",
      icon: <Smartphone className="h-10 w-10 text-dark-primaryAccent" />,
      comingSoon: true
    },
    {
      title: "AI Integration Services",
      description: "Enhance your applications with machine learning algorithms, natural language processing, computer vision, and intelligent automation.",
      icon: <Bolt className="h-10 w-10 text-dark-primaryAccent" />,
      comingSoon: true
    },
    {
      title: "Enterprise Solutions",
      description: "Large-scale enterprise applications with complex workflows, authentication systems, and multi-tenant architectures.",
      icon: <Server className="h-10 w-10 text-dark-primaryAccent" />,
      comingSoon: true
    }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Full Stack Web Development Services | La Empresa"
        description="Our comprehensive web development services include custom websites, web applications, e-commerce platforms, healthcare solutions, and more."
        keywords="web development, full stack development, custom web applications, e-commerce, healthcare platforms, CRM systems"
      />
      
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
              OUR EXPERTISE
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Full Stack Development Solutions
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We build powerful, scalable applications that solve real business challenges through expert engineering and innovative technology
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Core Services Section */}
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
              CORE SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Comprehensive Development Services
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We deliver end-to-end solutions from planning and design to development and ongoing maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden ${
                  isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'
                } border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-all duration-300`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        {service.description}
                      </p>
                    </div>
                    <div className="p-3 bg-dark-primaryAccent/10 rounded-xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dark-primaryAccent shrink-0 mt-0.5 mr-3" />
                        <span className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-end pt-6 border-t border-dark-primaryAccent/10">
                    <Link to="/contact" className="flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors">
                      <span className="font-medium">Discuss your project</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Our structured methodology ensures efficient delivery of high-quality solutions that meet your business objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-dark-primaryAccent" />,
                title: "Discovery",
                description: "We begin by understanding your business needs, target audience, and project goals through in-depth consultations."
              },
              {
                icon: <Palette className="h-10 w-10 text-dark-primaryAccent" />,
                title: "Design",
                description: "Our designers create intuitive interfaces and user experiences that align with your brand and business requirements."
              },
              {
                icon: <Code className="h-10 w-10 text-dark-primaryAccent" />,
                title: "Development",
                description: "Our engineering team builds your solution using modern technologies and best practices for optimal performance."
              },
              {
                icon: <Zap className="h-10 w-10 text-dark-primaryAccent" />,
                title: "Deployment & Support",
                description: "We ensure smooth deployment and provide ongoing support to help you maximize the value of your solution."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl ${
                  isDark ? 'bg-dark-background' : 'bg-light-background'
                } border border-dark-primaryAccent/10 relative`}
              >
                <div className="absolute -top-5 -left-5">
                  <div className="w-10 h-10 rounded-full bg-dark-primaryAccent flex items-center justify-center text-dark-background font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-3 bg-dark-primaryAccent/10 rounded-xl inline-block mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
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
              OUR TOOLBOX
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We use industry-leading technologies to build robust, scalable, and maintainable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStacks.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'
                } border border-dark-primaryAccent/10`}
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Braces className="h-5 w-5 text-dark-primaryAccent mr-2" />}
                  {index === 1 && <Server className="h-5 w-5 text-dark-primaryAccent mr-2" />}
                  {index === 2 && <Database className="h-5 w-5 text-dark-primaryAccent mr-2" />}
                  {index === 3 && <Globe className="h-5 w-5 text-dark-primaryAccent mr-2" />}
                  <h3 className="text-xl font-bold">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-primaryAccent/10 text-dark-primaryAccent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
              COMING SOON
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                Expanding Our Capabilities
              </span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We're constantly evolving to meet your future business needs with these upcoming service offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl ${
                  isDark ? 'bg-dark-background' : 'bg-light-background'
                } border border-dark-primaryAccent/10 text-center relative overflow-hidden group hover:border-dark-primaryAccent/30 transition-all duration-300`}
              >
                <div className="absolute top-0 right-0">
                  <div className="bg-dark-primaryAccent/20 text-dark-primaryAccent text-xs font-medium py-1 px-3 rounded-bl-lg">
                    Coming Soon
                  </div>
                </div>
                <div className="p-4 bg-dark-primaryAccent/10 rounded-full inline-flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className={`text-xl mb-10 max-w-3xl mx-auto ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Contact us today to discuss your project requirements and discover how we can help you achieve your business goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;