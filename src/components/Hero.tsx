import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#90FF42]/20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#90FF42]/20 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#90FF42]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#90FF42]"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-0 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Empowering Brands <br />
              Through <span className="text-[#90FF42]">Creative</span> Solutions
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              From web development to branding, we create exceptional digital experiences that help your brand soar and grow profits. Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#90FF42] text-black font-medium px-6 py-3 rounded-md hover:bg-[#7de339] transition-colors text-center">
                Elevate Your Brand
              </a>
              <a href="#projects" className="border border-white/30 text-white font-medium px-6 py-3 rounded-md hover:border-white/60 transition-colors text-center">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://mocha-cdn.com/01980b39-86b4-7964-af2d-79e595f61cdc/Rectangle.png" 
              alt="Creative design professional" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-black/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/10">
              <div className="flex items-center">
                <div className="flex">
                  <span className="text-[#90FF42]">★</span>
                  <span className="text-[#90FF42]">★</span>
                  <span className="text-[#90FF42]">★</span>
                  <span className="text-[#90FF42]">★</span>
                  <span className="text-[#90FF42]">★</span>
                </div>
                <div className="ml-2 text-white font-bold">10 Years</div>
              </div>
              <div className="text-white/70 text-sm">of industry excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
