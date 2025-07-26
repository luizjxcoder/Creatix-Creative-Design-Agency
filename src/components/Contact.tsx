import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        service: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#90FF42]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch <span className="text-[#90FF42]">Today!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#90FF42]/10 p-3 rounded-lg">
                <MapPin className="text-[#90FF42]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Our Location</h3>
                <p className="text-gray-400">123 Design Street, Creative City, 94107</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#90FF42]/10 p-3 rounded-lg">
                <Mail className="text-[#90FF42]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                <p className="text-gray-400">hello@creatix.design</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#90FF42]/10 p-3 rounded-lg">
                <Phone className="text-[#90FF42]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-10"
              >
                <div className="w-16 h-16 bg-[#90FF42]/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="text-[#90FF42]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-4">Send us a message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#90FF42]/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#90FF42]/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-400 text-sm mb-1">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#90FF42]/50"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="ux-ui-design">UX/UI Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="3d-design">3D Design</option>
                    <option value="motion-graphics">Motion Graphics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#90FF42]/50"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#90FF42] text-black font-medium py-3 rounded-lg hover:bg-[#7de339] transition-colors flex items-center justify-center"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
