import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "La Empresa transformed our outdated website into a beautiful, modern platform that's increased our lead generation by 65%. Their team delivered our project in just 6 days - exactly as promised.",
      author: "Sarah Johnson",
      position: "Marketing Director, Luxe Haven Interiors",
      project: "E-commerce Website",
      price: "$1,299",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Working with La Empresa was incredible. They built our e-commerce site in under 10 days, and our sales have increased by 40% since launch. Their prices were significantly lower than competitors without sacrificing quality.",
      author: "Michael Rodriguez",
      position: "CEO, StyleHaven Boutique",
      project: "E-commerce Website",
      price: "$1,299",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The web application they built for FinTrack Pro has streamlined our operations and saved us countless hours. Despite the complex requirements, they delivered on time and for 40% less than other agencies quoted us.",
      author: "David Chen",
      position: "Operations Manager, FinTrack Pro",
      project: "Web Application",
      price: "$1,999",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-dark-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-dark-textSecondary">
            Hear directly from businesses that saved money while getting exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl bg-dark-background border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-5 -left-2 text-6xl text-dark-primaryAccent/20 font-serif">"</div>
              
              {/* Star rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-dark-primaryAccent' : 'text-dark-textSecondary/20'}`} 
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-dark-textSecondary italic mb-6">"{testimonial.quote}"</p>
              
              {/* Project details */}
              <div className="flex justify-between text-sm text-dark-textSecondary mb-4">
                <div>
                  <span className="font-medium text-dark-primaryAccent">Project:</span> {testimonial.project}
                </div>
                <div>
                  <span className="font-medium text-dark-primaryAccent">Investment:</span> {testimonial.price}
                </div>
              </div>
              
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-dark-textPrimary">{testimonial.author}</h4>
                  <p className="text-sm text-dark-textSecondary">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            <span>Get Your 75% Discounted Quote</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 