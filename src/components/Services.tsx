import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    number: '01',
    title: 'UX/UI Design',
    description: 'Creating intuitive, engaging user experiences that delight customers and drive conversions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and applications using the latest technologies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    number: '03',
    title: '3D Design',
    description: 'Creating immersive 3D experiences and visualizations that bring your products and ideas to life.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    number: '04',
    title: 'Motion Graphics',
    description: 'Crafting eye-catching animations and visual effects that tell your story and capture attention.',
    image: 'https://images.unsplash.com/photo-1574717024453-354a08aab7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-12 relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16">
            <div className="w-16 h-16 rounded-full bg-[#90FF42]/10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#90FF42]/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#90FF42]"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left md:ml-24">
            Our <span className="text-[#90FF42]">Services</span>
          </h2>
          <p className="text-gray-400 text-center md:text-left md:ml-24 mt-2 max-w-2xl">
            We offer a range of creative and digital services designed to help your brand stand out.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-[#90FF42]/30 transition-all duration-300`}
            >
              <div className="md:w-1/3 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 md:hidden"></div>
                <div className="absolute top-4 left-4 bg-[#90FF42] text-black text-xs px-2 py-1 rounded font-medium md:hidden">
                  {service.number}
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <div className="hidden md:block text-[#90FF42] font-bold text-sm mb-2">{service.number}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a href="#contact" className="flex items-center text-[#90FF42] font-medium group">
                  Learn more <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
