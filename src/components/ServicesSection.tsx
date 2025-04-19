import { motion } from 'framer-motion';
import { Laptop, Code, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className="py-24 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Tailored Digital Solutions
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-dark-textSecondary">
            From stunning websites to powerful web applications, we craft digital experiences that elevate your brand and drive business growth at prices up to 75% below market rates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl p-8 bg-dark-primary/5 border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <Laptop className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">Website Development</h3>
            </div>
            <p className="text-dark-textSecondary">
              Custom responsive websites that captivate your audience with eye-catching designs and seamless navigation, optimized for performance and search engines.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Responsive design for all devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">SEO-optimized structure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Fast loading speed</span>
              </li>
            </ul>
            
            {/* Pricing and Timeline */}
            <div className="mt-6 pt-6 border-t border-dark-primaryAccent/10">
              <div className="flex flex-col mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">Original price:</span>
                  <span className="text-dark-textSecondary font-medium line-through">$141</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">75% discount:</span>
                  <span className="text-dark-primaryAccent font-bold text-lg">$35+</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-textSecondary font-medium">Delivery:</span>
                <span className="text-dark-textSecondary">3-5 days</span>
              </div>
              <div className="mt-4">
                <Link
                  to="/services"
                  className="block w-full py-3 text-center rounded-md bg-dark-primaryAccent/10 text-dark-primaryAccent hover:bg-dark-primaryAccent/20 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-8 bg-dark-primary/5 border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <Code className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">Web Application Development</h3>
            </div>
            <p className="text-dark-textSecondary">
              Powerful, scalable web applications built with modern frameworks to solve complex business challenges and streamline operations.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Custom functionality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Secure user authentication</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Cloud-based infrastructure</span>
              </li>
            </ul>
            
            {/* Pricing and Timeline */}
            <div className="mt-6 pt-6 border-t border-dark-primaryAccent/10">
              <div className="flex flex-col mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">Original price:</span>
                  <span className="text-dark-textSecondary font-medium line-through">$375</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">75% discount:</span>
                  <span className="text-dark-primaryAccent font-bold text-lg">$94+</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-textSecondary font-medium">Delivery:</span>
                <span className="text-dark-textSecondary">2-4 weeks</span>
              </div>
              <div className="mt-4">
                <Link
                  to="/services"
                  className="block w-full py-3 text-center rounded-md bg-dark-primaryAccent/10 text-dark-primaryAccent hover:bg-dark-primaryAccent/20 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-xl p-8 bg-dark-primary/5 border border-dark-primaryAccent/10 hover:border-dark-primaryAccent/30 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-dark-primaryAccent/10 rounded-lg mr-4">
                <ShoppingCart className="w-6 h-6 text-dark-primaryAccent" />
              </div>
              <h3 className="text-xl font-bold">E-commerce Solutions</h3>
            </div>
            <p className="text-dark-textSecondary">
              Complete online stores that turn visitors into customers with intuitive shopping experiences and secure payment processing.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Product catalog management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Secure checkout process</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dark-primaryAccent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-dark-textSecondary">Multiple payment gateways</span>
              </li>
            </ul>
            
            {/* Pricing and Timeline */}
            <div className="mt-6 pt-6 border-t border-dark-primaryAccent/10">
              <div className="flex flex-col mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">Original price:</span>
                  <span className="text-dark-textSecondary font-medium line-through">$1,406</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-textSecondary font-medium">75% discount:</span>
                  <span className="text-dark-primaryAccent font-bold text-lg">$351+</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-textSecondary font-medium">Delivery:</span>
                <span className="text-dark-textSecondary">7-10 days</span>
              </div>
              <div className="mt-4">
                <Link
                  to="/services"
                  className="block w-full py-3 text-center rounded-md bg-dark-primaryAccent/10 text-dark-primaryAccent hover:bg-dark-primaryAccent/20 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 rounded-full border border-dark-primaryAccent text-dark-primaryAccent hover:bg-dark-primaryAccent hover:text-dark-background transition-all duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        {/* Multi-Currency Note */}
        <div className="text-center mt-6">
          <p className="text-sm text-dark-textSecondary">
            * Prices shown in USD. We're offering a limited-time 75% discount. <Link to="/services" className="text-dark-primaryAccent hover:underline">See pricing details</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 