import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about-us" className="py-20 bg-black/95 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Turning Ideas Into <span className="text-[#90FF42]">Masterpieces</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Creative team working together" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute bottom-0 left-0 bg-[#90FF42] text-black text-xs font-bold px-4 py-2 uppercase tracking-wide">
                  A Creative Design Agency
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-300 mb-4">
                We may be a compact team, but our creativity knows no bounds. We bring together the perfect blend of technical expertise and artistic vision to transform your ideas into digital masterpieces.
              </p>
              
              <p className="text-gray-300 mb-6">
                Our multi-disciplinary team works collaboratively to deliver solutions that not only look stunning but also drive results. With specialists in UX/UI design, web development, and graphic design, we have all the skills needed to bring your vision to life.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <span className="text-[#90FF42] mr-2">✓</span>
                  Strategic, user-focused design approach
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-[#90FF42] mr-2">✓</span>
                  Custom solutions for businesses of all sizes
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-[#90FF42] mr-2">✓</span>
                  Continuous support and optimization
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
