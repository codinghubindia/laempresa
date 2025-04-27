import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "MediNest",
      category: "Healthcare Platform",
      description: "Medical appointment scheduling system with integrated patient management and telemedicine features.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735790/medinest_qzje5c.png",
      technologies: ["React", "Node.js", "MongoDB"],
      url: "https://medinestt.netlify.app/"
    },
    {
      title: "NexaCart",
      category: "E-commerce Platform",
      description: "Feature-rich e-commerce platform with advanced product filtering, user accounts and secure payment processing.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735793/nexacart_wswpsi.png",
      technologies: ["React", "Redux", "Stripe API"],
      url: "https://nexacart.netlify.app/"
    },
    {
      title: "Velva Essence",
      category: "Designer Portfolio",
      description: "Elegant portfolio website for design professionals featuring project showcases, client testimonials, and contact forms.",
      image: "https://res.cloudinary.com/dbnzoosjq/image/upload/v1745735795/Velva_Essence_tyspqw.png",
      technologies: ["Next.js", "Tailwind CSS", "Contentful CMS"],
      url: "https://velvaessence.netlify.app/"
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
            Browse through our latest projects and see how we've helped businesses transform their digital presence
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
                  loading={index === 0 ? "eager" : "lazy"}
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
                {/* Project technologies */}
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
                
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-dark-primaryAccent hover:text-dark-secondaryAccent transition-colors"
                >
                  <span>Visit Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
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