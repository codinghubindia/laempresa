import React, { useState, useEffect, useRef, useCallback, memo, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  ArrowRight,
  MessageSquare,
  Clock,
  Loader2
} from 'lucide-react';
import { useTheme } from '../components/ThemeContext';
import { sendEmail } from '../services/emailService';

// Define form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  companyName: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
}

// ContactForm props interface
interface ContactFormProps {
  isDark: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: FormEvent) => Promise<void>;
  loading: boolean;
}

// Submit Button with loading animation component
const SubmitButton = memo(({ loading }: { loading: boolean }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group w-full px-6 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center overflow-hidden relative"
    >
      {loading ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span>Sending...</span>
        </motion.div>
      ) : (
        <motion.div 
          whileHover={{ x: 5 }}
          className="flex items-center"
        >
          <span>Send Message</span>
          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      )}
      
      {loading && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-dark-primaryAccent/0 via-white/10 to-dark-primaryAccent/0"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "linear" 
          }}
        />
      )}
    </button>
  );
});

SubmitButton.displayName = 'SubmitButton';

// Memoize complex form components for better performance
const ContactForm = memo(({ 
  isDark, 
  formData, 
  setFormData, 
  formRef, 
  handleSubmit, 
  loading 
}: ContactFormProps) => {
  // Form field change handler with debounce
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, [setFormData]);
  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="companyName" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
          />
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="phone" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label 
          htmlFor="subject" 
          className={`block text-sm font-medium ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full p-3 rounded-lg border ${
            isDark 
              ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
              : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
          } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="projectType" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition appearance-none`}
            style={{ color: formData.projectType ? 'inherit' : 'rgba(255, 255, 255, 0.5)' }}
          >
            <option value="" style={{ backgroundColor: '#121212' }}>Select a project type</option>
            <option value="website" style={{ backgroundColor: '#121212' }}>Website Development</option>
            <option value="ecommerce" style={{ backgroundColor: '#121212' }}>E-commerce Solution</option>
            <option value="webapp" style={{ backgroundColor: '#121212' }}>Web Application</option>
            <option value="mobile" style={{ backgroundColor: '#121212' }}>Mobile App</option>
            <option value="design" style={{ backgroundColor: '#121212' }}>UI/UX Design</option>
            <option value="other" style={{ backgroundColor: '#121212' }}>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label 
            htmlFor="budget" 
            className={`block text-sm font-medium ${
              isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
            }`}
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border ${
              isDark 
                ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
                : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
            } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition appearance-none`}
            style={{ color: formData.budget ? 'inherit' : 'rgba(255, 255, 255, 0.5)' }}
          >
            <option value="" style={{ backgroundColor: '#121212' }}>Select budget range</option>
            <option value="0-500" style={{ backgroundColor: '#121212' }}>$299 - $499</option>
            <option value="500-1000" style={{ backgroundColor: '#121212' }}>$500 - $999</option>
            <option value="1000-2000" style={{ backgroundColor: '#121212' }}>$1,000 - $1,999</option>
            <option value="2000-3000" style={{ backgroundColor: '#121212' }}>$2,000 - $2,999</option>
            <option value="3000+" style={{ backgroundColor: '#121212' }}>$3,000+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label 
          htmlFor="timeline" 
          className={`block text-sm font-medium ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}
        >
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            isDark 
              ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
              : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
          } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition appearance-none`}
          style={{ color: formData.timeline ? 'inherit' : 'rgba(255, 255, 255, 0.5)' }}
        >
          <option value="" style={{ backgroundColor: '#121212' }}>Select timeline</option>
          <option value="3-5days" style={{ backgroundColor: '#121212' }}>3-5 days (Standard website)</option>
          <option value="7-10days" style={{ backgroundColor: '#121212' }}>7-10 days (E-commerce)</option>
          <option value="2-4weeks" style={{ backgroundColor: '#121212' }}>2-4 weeks (Web application)</option>
          <option value="asap" style={{ backgroundColor: '#121212' }}>As soon as possible</option>
          <option value="flexible" style={{ backgroundColor: '#121212' }}>Flexible</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className={`block text-sm font-medium ${
            isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'
          }`}
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className={`w-full p-3 rounded-lg border ${
            isDark 
              ? 'bg-dark-background border-dark-border focus:border-dark-primaryAccent' 
              : 'bg-light-background border-light-border focus:border-dark-primaryAccent'
          } focus:outline-none focus:ring-2 focus:ring-dark-primaryAccent/20 transition`}
        ></textarea>
      </div>
      
      <SubmitButton loading={loading} />
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

// Main Contact component 
const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    companyName: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      // Use emailService to send the email
      const success = await sendEmail(formData);
      
      if (success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thanks for your message! We will get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          companyName: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly at laempresa.team@gmail.com',
      });
    } finally {
      // Add a slight delay before removing loading state for better UX
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [formData]);

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
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h1>
            <p className={`text-xl mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
              Have a project in mind? We'd love to discuss how we can help transform your ideas into reality at a price that works for your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-dark-surface/30' : 'bg-light-surface/50'
              } border border-dark-primaryAccent/10`}
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h2>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-xl mb-6 ${
                    formStatus.success
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  <p className="text-lg font-medium">{formStatus.message}</p>
                  {formStatus.success && (
                    <button
                      onClick={() => {
                        setFormStatus({
                          submitted: false,
                          success: false,
                          message: '',
                        });
                      }}
                      className="mt-4 text-green-700 underline"
                    >
                      Send another message
                    </button>
                  )}
                </motion.div>
              ) : (
                <ContactForm 
                  isDark={isDark}
                  formData={formData}
                  setFormData={setFormData}
                  formRef={formRef}
                  handleSubmit={handleSubmit}
                  loading={loading}
                />
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent bg-clip-text text-transparent">
                    Connect With Us
                  </span>
                </h2>
                <p className={`text-lg mb-8 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  Whether you have a question about our affordable services, pricing, or just want to say hello, we'd love to hear from you!
                </p>
              
                <div className="space-y-6">
                  {/* Email */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${isDark ? 'bg-dark-surface' : 'bg-light-surface'}`}>
                        <Mail size={20} className="text-dark-primaryAccent" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Email Us
                      </h3>
                    </div>
                    <div className="mt-2 ml-9">
                      <p className={`${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                        <a 
                          href="mailto:laempresa.team@gmail.com" 
                          className="hover:underline text-dark-primaryAccent"
                        >
                          laempresa.team@gmail.com
                        </a>
                      </p>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${isDark ? 'bg-dark-surface' : 'bg-light-surface'}`}>
                        <Phone size={20} className="text-dark-primaryAccent" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Call Us
                      </h3>
                    </div>
                    <div className="mt-2 ml-9">
                      <p className={`${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                        <a 
                          href="tel:+917483001434" 
                          className="hover:underline text-dark-primaryAccent"
                        >
                          +91 7483001434
                        </a>
                      </p>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        Mon-Fri: 9am - 6pm IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-dark-primaryAccent/10 rounded-xl">
                      <MapPin className="h-6 w-6 text-dark-primaryAccent" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-medium mb-1 ${
                        isDark ? 'text-dark-text' : 'text-light-text'
                      }`}>
                        Office Location
                      </h3>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        BEML Layout, Ideal Homes Twp, Rajarajeshwari Nagar
                      </p>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        Bengaluru, Karnataka 560098
                      </p>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-dark-primaryAccent/10 rounded-xl">
                      <Clock className="h-6 w-6 text-dark-primaryAccent" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-medium mb-1 ${
                        isDark ? 'text-dark-text' : 'text-light-text'
                      }`}>
                        Business Hours
                      </h3>
                      <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                        Monday - Friday: 9am - 6pm IST<br />
                        Weekend: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 rounded-2xl ${
                isDark ? 'bg-dark-surface/30' : 'bg-light-surface/50'
              } border border-dark-primaryAccent/10`}>
                <div className="flex items-center space-x-4 mb-6">
                  <Calendar className="h-6 w-6 text-dark-primaryAccent" />
                  <h3 className="text-xl font-bold">Book a Consultation</h3>
                </div>
                <p className={`mb-6 ${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                  Want to discuss your project in detail? Schedule a free 30-minute consultation with one of our experts and learn how we can deliver premium quality at affordable rates.
                </p>
                <a 
                  href="mailto:laempresa.team@gmail.com?subject=Consultation%20Request" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 font-medium rounded-full bg-dark-primaryAccent/10 text-dark-primaryAccent hover:bg-dark-primaryAccent/20 transition-all duration-300"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
                
              <div className={`p-8 rounded-2xl ${
                isDark ? 'bg-dark-surface/30' : 'bg-light-surface/50'
              } border border-dark-primaryAccent/10`}>
                <div className="flex items-center space-x-4 mb-6">
                  <MessageSquare className="h-6 w-6 text-dark-primaryAccent" />
                  <h3 className="text-xl font-bold">FAQ</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      isDark ? 'text-dark-text' : 'text-light-text'
                    }`}>
                      How soon can you start on my project?
                    </h4>
                    <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                      We can start most projects immediately! Standard websites are delivered in 3-5 days, e-commerce sites in 7-10 days, and web applications in 2-4 weeks.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      isDark ? 'text-dark-text' : 'text-light-text'
                    }`}>
                      What makes your pricing so affordable?
                    </h4>
                    <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                      We maintain low overhead costs, use efficient development processes, and leverage pre-built components to deliver high-quality work at prices 40-75% lower than market rates.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      isDark ? 'text-dark-text' : 'text-light-text'
                    }`}>
                      Do you offer maintenance after launch?
                    </h4>
                    <p className={`${isDark ? 'text-dark-textSecondary' : 'text-light-textSecondary'}`}>
                      Yes, we offer affordable maintenance packages to keep your website secure, up-to-date, and running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/20' : 'bg-light-surface/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden h-[400px] border border-dark-primaryAccent/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.771956648168!2d77.5096893!3d12.9268428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f2c6290cebd%3A0x4c7b5d7e8ff9e495!2sBEML%20Layout%2C%20Ideal%20Homes%20Township%2C%20RR%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1624028041261!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="La Empresa Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 