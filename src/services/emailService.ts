import emailjs from '@emailjs/browser';

// Initialize EmailJS once
let isInitialized = false;

// Track email sending time for minimum duration calculations
let emailStartTime = 0;

// Minimum loading time in milliseconds to ensure the animation is visible
const MIN_LOADING_TIME = 800;

// Function to initialize EmailJS with environment variables
const initializeEmailJS = (): void => {
  if (isInitialized) return;
  
  try {
    // Get values from environment variables at runtime
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!publicKey) {
      console.error('EmailJS public key not found in environment variables');
      return;
    }
    
    emailjs.init(publicKey);
    isInitialized = true;
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
  }
};

/**
 * Ensures a promise resolves after a minimum amount of time
 * This helps with showing loading animations for a meaningful duration
 * @param promise The promise to wait for
 * @param ms Minimum time in milliseconds
 */
const ensureMinTime = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  // Create a delay promise
  const delay = new Promise<void>(resolve => setTimeout(resolve, ms));
  
  // Return a promise that waits for both the original promise and the delay
  return Promise.all([promise, delay]).then(([result]) => result);
};

// Send email using form data
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  companyName?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
}): Promise<boolean> => {
  try {
    // Start the timer for minimum loading duration
    emailStartTime = Date.now();
    
    // Initialize EmailJS if not already initialized
    if (!isInitialized) {
      initializeEmailJS();
    }
    
    // Get service and template IDs from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    if (!serviceId || !templateId) {
      console.error('EmailJS service or template ID not found in environment variables');
      return false;
    }
    
    // Create template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      companyName: formData.companyName || 'Not provided',
      phone: formData.phone || 'Not provided',
      projectType: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified'
    };
    
    // Send email with minimum time guarantee
    const emailPromise = emailjs.send(serviceId, templateId, templateParams);
    await ensureMinTime(emailPromise, MIN_LOADING_TIME);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Ensure the loading animation shows for at least the minimum time
    const elapsedTime = Date.now() - emailStartTime;
    if (elapsedTime < MIN_LOADING_TIME) {
      await new Promise(resolve => setTimeout(resolve, MIN_LOADING_TIME - elapsedTime));
    }
    
    return false;
  }
}; 