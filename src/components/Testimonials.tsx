import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'Working with Creatix transformed our brand identity. Their design team understood our vision perfectly and delivered a website that exceeded our expectations. The increased conversion rates speak for themselves!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, Innovate Solutions',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'The UI/UX design for our app was outstanding. Creatix delivered a user experience that our customers love, resulting in higher engagement and retention. I highly recommend their services for any digital product.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, Bloom Boutique',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    quote: 'As a small business owner, I needed a brand that would help me stand out. Creatix created a beautiful brand identity and e-commerce site that perfectly captures the essence of my business. Sales have increased 200% since launch!'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#90FF42]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#90FF42]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#90FF42]">Clients</span> Say
          </h2>
          <p className="text-gray-400">
            Don't just take our word for it - hear from some of our satisfied clients.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#90FF42]">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 text-center md:text-left">
                      <div className="mb-4 flex justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#90FF42]">★</span>
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-300 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div>
                        <p className="text-white font-bold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-white/5 hover:bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#90FF42]' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white/5 hover:bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
