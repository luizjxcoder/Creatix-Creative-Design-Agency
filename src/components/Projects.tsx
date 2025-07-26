import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'UX/UI Design',
    image: 'https://images.unsplash.com/photo-1523467327888-a8a445992901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Complete redesign of an e-commerce platform focusing on conversion optimization and user experience improvements.'
  },
  {
    id: 2,
    title: 'Banking App Interface',
    category: 'UX/UI Design',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Modern banking application interface designed for ease of use while maintaining high security standards.'
  },
  {
    id: 3,
    title: 'SaaS Marketing Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Fast, responsive marketing website for a SaaS product with seamless animations and strong conversion focus.'
  },
  {
    id: 4,
    title: 'Brand Identity Package',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.'
  },
  {
    id: 5,
    title: 'Interactive Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Data visualization dashboard with real-time updates, interactive charts, and customizable widgets.'
  },
  {
    id: 6,
    title: 'Product Packaging Design',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Eye-catching product packaging design that stands out on shelves and reinforces brand identity.'
  }
];

const categories = ['All', 'UX/UI Design', 'Web Development', 'Graphic Design'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#90FF42]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#90FF42]">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped brands achieve their digital goals.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#90FF42] text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm hover:border-[#90FF42]/30 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-[#90FF42] text-black text-xs px-2 py-1 rounded font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="#contact" className="text-[#90FF42] text-sm font-medium hover:underline">
                    View Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
