import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendEmail } from '../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Website Inquiry',
    message: '',
    companyName: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    
    try {
      const result = await sendEmail(formData);
      
      if (result) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Website Inquiry',
          message: '',
          companyName: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden bg-dark-background border border-dark-primaryAccent/10 shadow-lg">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-dark-textPrimary mb-2">Request a Free Consultation</h3>
        <p className="text-dark-textSecondary mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
        
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-500"
          >
            Thank you! Your message has been sent successfully. We'll contact you shortly.
          </motion.div>
        )}
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-500"
          >
            There was an error sending your message. Please try again or contact us directly.
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-dark-textSecondary text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-dark-surface/30 border border-dark-primaryAccent/20 focus:outline-none focus:border-dark-primaryAccent/70 text-dark-textPrimary"
                placeholder="Your name"
                required
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-dark-textSecondary text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-dark-surface/30 border border-dark-primaryAccent/20 focus:outline-none focus:border-dark-primaryAccent/70 text-dark-textPrimary"
                placeholder="your.email@example.com"
                required
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="projectType" className="block text-dark-textSecondary text-sm font-medium mb-1">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-dark-surface/30 border border-dark-primaryAccent/20 focus:outline-none focus:border-dark-primaryAccent/70 text-dark-textPrimary appearance-none"
                style={{ color: formData.projectType ? 'inherit' : 'rgba(255, 255, 255, 0.5)' }}
                disabled={loading}
              >
                <option value="" style={{ backgroundColor: '#121212' }}>Select a project type</option>
                <option value="website" style={{ backgroundColor: '#121212' }}>Website Development</option>
                <option value="webApp" style={{ backgroundColor: '#121212' }}>Web Application</option>
                <option value="ecommerce" style={{ backgroundColor: '#121212' }}>E-commerce Solution</option>
                <option value="design" style={{ backgroundColor: '#121212' }}>UI/UX Design</option>
                <option value="other" style={{ backgroundColor: '#121212' }}>Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-dark-textSecondary text-sm font-medium mb-1">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-dark-surface/30 border border-dark-primaryAccent/20 focus:outline-none focus:border-dark-primaryAccent/70 text-dark-textPrimary appearance-none"
                style={{ color: formData.budget ? 'inherit' : 'rgba(255, 255, 255, 0.5)' }}
                disabled={loading}
              >
                <option value="" style={{ backgroundColor: '#121212' }}>Select budget range</option>
                <option value="0-500" style={{ backgroundColor: '#121212' }}>$299 - $499</option>
                <option value="500-1000" style={{ backgroundColor: '#121212' }}>$500 - $999</option>
                <option value="1000-2000" style={{ backgroundColor: '#121212' }}>$1,000 - $1,999</option>
                <option value="2000-3000" style={{ backgroundColor: '#121212' }}>$2,000 - $2,999</option>
                <option value="3000+" style={{ backgroundColor: '#121212' }}>$3,000+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-dark-textSecondary text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-dark-surface/30 border border-dark-primaryAccent/20 focus:outline-none focus:border-dark-primaryAccent/70 text-dark-textPrimary"
                placeholder="Tell us about your project"
                required
                disabled={loading}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-dark-primaryAccent to-dark-secondaryAccent text-dark-background rounded-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            >
              {loading ? (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>Submit Inquiry</span>
                  <Send className="ml-2 h-4 w-4" />
                </div>
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
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-dark-textSecondary text-xs">
            By submitting this form, you agree to our <a href="#" className="text-dark-primaryAccent hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 