import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Laptop, ShoppingCart, CheckCircle, Mail, Users, ArrowUpRight } from 'lucide-react';
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
      id: 'medinestt',
      title: "MediNest",
      category: "Healthcare Platform",
      description: "Medical appointment scheduling system with integrated patient management and telemedicine features.",
      fullDescription: "MedinesTT is a comprehensive healthcare platform designed to streamline medical appointment scheduling and patient management. The platform features integrated telemedicine capabilities, patient record management, and automated appointment reminders to enhance the healthcare experience for both providers and patients.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735790/medinest_qzje5c.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
      features: [
        "Online appointment scheduling",
        "Telemedicine video consultations",
        "Patient record management",
        "Prescription management",
        "Automated reminders"
      ],
      results: [
        "30% reduction in appointment no-shows",
        "Improved patient satisfaction scores by 45%",
        "Streamlined administrative processes"
      ],
      url: "https://medinestt.netlify.app/"
    },
    {
      id: 'nexacart',
      title: "NexaCart",
      category: "E-commerce Platform",
      description: "Feature-rich e-commerce platform with advanced product filtering, user accounts and secure payment processing.",
      fullDescription: "NexaCart is a modern e-commerce solution built with scalability and user experience in mind. The platform offers advanced product filtering, personalized user accounts, secure payment processing, and a responsive design that provides an optimal shopping experience across all devices.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735793/nexacart_wswpsi.png",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API", "JWT Authentication"],
      features: [
        "Advanced product filtering",
        "User account management",
        "Secure payment processing",
        "Order tracking system",
        "Responsive design"
      ],
      results: [
        "55% increase in conversion rate",
        "40% reduction in cart abandonment",
        "3x increase in average order value"
      ],
      url: "https://nexacart.netlify.app/"
    },
    {
      id: 'velvaessence',
      title: "Velva Essence",
      category: "Designer Portfolio",
      description: "Elegant portfolio website for design professionals featuring project showcases, client testimonials, and contact forms.",
      fullDescription: "Velva Essence is a premium portfolio platform for design professionals to showcase their work. The site features elegant project showcases, detailed case studies, client testimonials, and custom contact forms to help designers connect with potential clients and highlight their creative expertise.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735795/Velva_Essence_tyspqw.png",
      technologies: ["Next.js", "Tailwind CSS", "Contentful CMS", "Vercel", "Algolia Search"],
      features: [
        "Elegant project showcases",
        "Custom case study layouts",
        "Client testimonial system",
        "Contact form with filtering",
        "Design process timeline"
      ],
      results: [
        "50% increase in client inquiries",
        "35% growth in project bookings",
        "Improved portfolio presentation"
      ],
      url: "https://velvaessence.netlify.app/"
    },
    {
      id: 'clientnestcrm',
      title: "ClientNest CRM",
      category: "Web Application",
      description: "Customer relationship management system with lead tracking, task management, and performance analytics.",
      fullDescription: "ClientNest CRM is a comprehensive customer relationship management system designed for small to medium businesses. The application features lead tracking, task management, performance analytics, and automated follow-up sequences to help businesses nurture relationships and close more deals.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735785/crm_s088hm.png",
      technologies: ["React", "Firebase", "Redux", "Material UI", "ChartJS", "Auth0"],
      features: [
        "Lead tracking and scoring",
        "Task management system",
        "Performance analytics",
        "Automated follow-up sequences",
        "Email integration"
      ],
      results: [
        "65% improvement in lead conversion",
        "40% reduction in sales cycle length",
        "Centralized customer data management"
      ],
      url: "https://clientnestcrm.netlify.app/login"
    },
    {
      id: 'velvetform',
      title: "Velvet Form",
      category: "Form Builder",
      description: "Elegant form building platform with customizable templates, conditional logic, and response analytics.",
      fullDescription: "Velvet Form is a sophisticated form building platform that allows users to create beautiful, functional forms with ease. The platform includes customizable templates, conditional logic, file uploads, and comprehensive response analytics to help users gather and analyze data effectively.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735696/img1_dv6ibo.png",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS Lambda", "Tailwind CSS"],
      features: [
        "Drag-and-drop form builder",
        "Customizable templates",
        "Conditional logic",
        "File upload capability",
        "Response analytics"
      ],
      results: [
        "75% reduction in form creation time",
        "Increased form completion rates by 40%",
        "Enhanced data collection capabilities"
      ],
      url: "https://velvetform.netlify.app/"
    }
  ];

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'E-commerce Platform':
        return <ShoppingCart className="h-5 w-5" />;
      case 'Web Application':
        return <Code className="h-5 w-5" />;
      case 'Healthcare Platform':
        return <Users className="h-5 w-5" />;
      case 'Form Builder':
        return <CheckCircle className="h-5 w-5" />;
      case 'Beauty & Cosmetics':
        return <ShoppingCart className="h-5 w-5" />;
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
              Browse our collection of website and application projects that have helped businesses elevate their digital presence
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
                      <span className="font-medium text-dark-primaryAccent">Client:</span> Premium Project
                    </div>
                    <div>
                      <span className="font-medium text-dark-primaryAccent">Sector:</span> {item.category.split(' ')[0]}
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
                    <h4 className="text-dark-primaryAccent font-medium mb-2">Project Type</h4>
                    <p className="text-2xl font-bold">{item.category}</p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
                    <h4 className="text-dark-primaryAccent font-medium mb-2">Visit</h4>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold flex items-center hover:text-dark-primaryAccent">
                      Website <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
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
              We deliver premium results with expert engineering and innovative technology. Let's start building your digital presence today.
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