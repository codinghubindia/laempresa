import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Luxe Haven Interiors",
      category: "E-commerce Website",
      description: "Premium home decor online store with integrated payment system and custom product showcases.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["React", "Shopify", "Tailwind CSS"],
      price: "$1,299",
      timeline: "7 days",
      url: "/portfolio/luxe-haven"
    },
    {
      title: "FinTrack Pro",
      category: "Web Application",
      description: "Financial analytics dashboard for small businesses with real-time reporting and user authentication.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Vue.js", "Node.js", "Chart.js"],
      price: "$1,999",
      timeline: "14 days",
      url: "/portfolio/fintrack"
    },
    {
      title: "EcoVenture",
      category: "Corporate Website",
      description: "Environmental consulting firm with appointment booking system and resource library.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      technologies: ["Next.js", "Strapi CMS", "Tailwind CSS"],
      price: "$799",
      timeline: "5 days",
      url: "/portfolio/ecoventure"
    }
  ];

  return (
    <section className="py-24 bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
            OUR PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Recent Success Stories
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-dark-textSecondary">
            Browse through our latest projects and see how we've helped businesses transform their digital presence at competitive rates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden bg-dark-surface/20 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-background to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-primaryAccent/20 text-dark-primaryAccent mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark-textPrimary">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark-textSecondary mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-dark-primaryAccent/10 text-dark-primaryAccent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project details */}
                <div className="flex justify-between text-sm text-dark-textSecondary mb-4">
                  <div>
                    <span className="font-medium text-dark-primaryAccent">Investment:</span> {item.price}
                  </div>
                  <div>
                    <span className="font-medium text-dark-primaryAccent">Timeline:</span> {item.timeline}
                  </div>
                </div>
                
                <Link
                  to={item.url}
                  className="inline-flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors"
                >
                  <span>View project details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-3 rounded-full border border-dark-primaryAccent text-dark-primaryAccent hover:bg-dark-primaryAccent hover:text-dark-background transition-all duration-300"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 