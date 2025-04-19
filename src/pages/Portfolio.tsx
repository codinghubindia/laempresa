import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Laptop, ShoppingCart, CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import SEO from '../components/SEO';

const Portfolio = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const portfolioItems = [
    {
      id: 'luxe-haven',
      title: "Luxe Haven Interiors",
      category: "E-commerce Website",
      description: "Premium home decor online store with integrated payment system and custom product showcases.",
      fullDescription: "We developed a high-converting e-commerce platform for Luxe Haven Interiors, featuring custom product showcases, seamless checkout experiences, and mobile-responsive design that increased their online sales by 45% within the first month of launch.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "Shopify", "Tailwind CSS", "Node.js", "Stripe"],
      features: [
        "Custom product showcases",
        "User account management",
        "Integrated payment system",
        "Inventory management",
        "Responsive design"
      ],
      results: [
        "45% increase in online sales",
        "65% reduction in cart abandonment",
        "3.5x increase in mobile conversions"
      ],
      price: "$599",
      timeline: "7 days"
    },
    {
      id: 'fintrack',
      title: "FinTrack Pro",
      category: "Web Application",
      description: "Financial analytics dashboard for small businesses with real-time reporting and user authentication.",
      fullDescription: "FinTrack Pro needed a sophisticated web application to help small businesses track financial metrics in real-time. We delivered a secure, intuitive dashboard with custom reporting tools, multi-level user permissions, and data visualization capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Vue.js", "Node.js", "Chart.js", "Express", "MongoDB", "Auth0"],
      features: [
        "Real-time financial tracking",
        "Custom report generation",
        "Multi-level user permissions",
        "Data visualization tools",
        "Secure authentication"
      ],
      results: [
        "Saved 20+ hours per month in financial reporting",
        "Improved decision-making speed by 70%",
        "Enabled remote team collaboration"
      ],
      price: "$799",
      timeline: "14 days"
    },
    {
      id: 'ecoventure',
      title: "EcoVenture",
      category: "Corporate Website",
      description: "Environmental consulting firm with appointment booking system and resource library.",
      fullDescription: "EcoVenture required a professional corporate website to showcase their environmental consulting services. We built a modern, content-rich platform featuring an intuitive appointment booking system, searchable resource library, and blog integration.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Next.js", "Strapi CMS", "Tailwind CSS", "PostgreSQL", "Calendly API"],
      features: [
        "Content management system",
        "Appointment booking integration",
        "Resource library with search",
        "Blog with categories",
        "Contact form with filtering"
      ],
      results: [
        "200% increase in online appointment bookings",
        "5x growth in resource downloads",
        "Reduced administrative workload by 35%"
      ],
      price: "$299",
      timeline: "5 days"
    },
    {
      id: 'fitquest',
      title: "FitQuest",
      category: "Fitness Web App",
      description: "Personalized workout tracking application with progress analytics and community features.",
      fullDescription: "FitQuest wanted to create a modern fitness web application to help users track workouts, set goals, and connect with other fitness enthusiasts. We delivered a feature-rich platform with custom workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
      features: [
        "Custom workout planning",
        "Progress tracking with charts",
        "Social sharing capabilities",
        "Achievement system",
        "Nutrition logging"
      ],
      results: [
        "10,000+ active users within first month",
        "Average session time of 15+ minutes",
        "92% user retention rate"
      ],
      price: "$799",
      timeline: "12 days"
    },
    {
      id: 'artisan-cafe',
      title: "Artisan Café",
      category: "Restaurant Website",
      description: "Elegant website with online ordering system and table reservations for a boutique café.",
      fullDescription: "Artisan Café needed a visually appealing website to showcase their menu and enable online ordering. We created a mobile-friendly site with reservation capabilities, online ordering integration, and gallery features to highlight their unique dining atmosphere.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "MySQL", "JavaScript"],
      features: [
        "Menu display with filtering",
        "Online ordering system",
        "Table reservation integration",
        "Event calendar",
        "Newsletter subscription"
      ],
      results: [
        "35% increase in table reservations",
        "Added revenue stream through online orders",
        "Reduced phone inquiries by 50%"
      ],
      price: "$299",
      timeline: "6 days"
    },
    {
      id: 'techwave',
      title: "TechWave Solutions",
      category: "Corporate Website",
      description: "Modern tech company website with service offerings, case studies, and streamlined client portal.",
      fullDescription: "TechWave Solutions sought a professional website to establish their brand in the tech consulting space. We developed a polished corporate site with detailed service pages, interactive case studies, and a secure client portal for project updates.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication"],
      features: [
        "Dynamic service pages",
        "Filterable case studies",
        "Client portal with dashboards",
        "Team member profiles",
        "Contact routing system"
      ],
      results: [
        "40% increase in qualified leads",
        "Reduced client onboarding time by 65%",
        "Improved client satisfaction scores"
      ],
      price: "$399",
      timeline: "8 days"
    }
  ];

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'E-commerce Website':
        return <ShoppingCart className="h-5 w-5" />;
      case 'Web Application':
        return <Code className="h-5 w-5" />;
      default:
        return <Laptop className="h-5 w-5" />;
    }
  };

  return (
    <div className="pt-16">
      {/* SEO component */}
      <SEO 
        title="Our Portfolio | Premium Digital Solutions"
        description="Browse our portfolio of websites, web applications, and e-commerce solutions we've developed for clients across various industries."
        keywords="portfolio, web design, website examples, case studies, development projects, client work"
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
              OUR WORK
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Portfolio of Success
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Browse our collection of website and application projects that have helped businesses elevate their digital presence at 75% below market rates
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden bg-dark-surface/20 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-dark-primaryAccent/20 text-dark-primaryAccent">
                        {getCategoryIcon(item.category)}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-primaryAccent/20 text-dark-primaryAccent">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-textPrimary mt-2">{item.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-dark-textSecondary mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-dark-primaryAccent/10 text-dark-primaryAccent"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-dark-primaryAccent/5 text-dark-primaryAccent/80">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Project details */}
                  <div className="flex justify-between text-sm text-dark-textSecondary mb-4 mt-auto">
                    <div>
                      <span className="font-medium text-dark-primaryAccent">Investment:</span> {item.price}
                    </div>
                    <div>
                      <span className="font-medium text-dark-primaryAccent">Timeline:</span> {item.timeline}
                    </div>
                  </div>
                  
                  {/* Results preview */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-dark-textSecondary">{item.results[0]}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-center">
                    <button
                      onClick={() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors"
                    >
                      <span>View details</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Details Sections */}
      {portfolioItems.map((item, index) => (
        <section 
          key={item.id}
          id={item.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-dark-surface/30' : 'bg-dark-background'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="rounded-xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
                    <h4 className="text-dark-primaryAccent font-medium mb-2">Investment</h4>
                    <p className="text-2xl font-bold">{item.price}</p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
                    <h4 className="text-dark-primaryAccent font-medium mb-2">Timeline</h4>
                    <p className="text-2xl font-bold">{item.timeline}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-full bg-dark-primaryAccent/20 text-dark-primaryAccent">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-primaryAccent/20 text-dark-primaryAccent">
                    {item.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                  {item.title}
                </h2>
                
                <p className="text-dark-textSecondary mb-8">
                  {item.fullDescription}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 rounded-md text-sm font-medium bg-dark-primaryAccent/10 text-dark-primaryAccent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-textSecondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Results Delivered</h3>
                    <ul className="space-y-2">
                      {item.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-dark-textSecondary">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-dark-surface text-dark-textSecondary border border-dark-surface">
                    <span>Premium Client Project</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                  >
                    <span>Get a Similar Project</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Ready to Create Your Success Story?
            </h2>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              We deliver premium results at prices up to 75% below market rates. Let's start building your digital presence today.
            </p>
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
    </div>
  );
};

export default Portfolio; 