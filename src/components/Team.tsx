import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Specializes in creating intuitive interfaces with 6+ years of experience in fintech and e-commerce.'
  },
  {
    id: 2,
    name: 'Sam Rodriguez',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Expert in React, Vue, and modern JavaScript with a focus on performance and accessibility.'
  },
  {
    id: 3,
    name: 'Jamie Chen',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Award-winning designer with expertise in branding, typography, and visual storytelling.'
  },
  {
    id: 4,
    name: 'Taylor Wilson',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Skilled in architecting scalable systems and APIs with Node.js, Python, and cloud technologies.'
  },
  {
    id: 5,
    name: 'Jordan Lee',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Creates stunning animations and interactive experiences that bring brands to life.'
  },
  {
    id: 6,
    name: 'Casey Rivera',
    role: '3D Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Specializes in creating immersive 3D experiences and product visualizations.'
  }
];

export default function Team() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-[#90FF42]">Experts</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our talented team of specialists brings diverse skills and perspectives to every project.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-[#90FF42]/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 relative -mt-16">
                <div className="bg-black/80 backdrop-blur-sm p-5 rounded-lg border border-white/10">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#90FF42] text-sm font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
