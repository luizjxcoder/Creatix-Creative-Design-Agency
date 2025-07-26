import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center text-white text-xl font-bold">
              <span className="text-[#90FF42] mr-1">•</span> Creatix
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about-us" className="text-white hover:text-[#90FF42] transition-colors">About Us</a>
            <a href="#services" className="text-white hover:text-[#90FF42] transition-colors">Services</a>
            <a href="#projects" className="text-white hover:text-[#90FF42] transition-colors">Projects</a>
            <a href="#team" className="text-white hover:text-[#90FF42] transition-colors">Team</a>
            <a href="#contact" className="bg-[#90FF42] text-black font-medium px-4 py-2 rounded-md hover:bg-[#7de339] transition-colors">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#about-us" className="text-white hover:text-[#90FF42] transition-colors py-2" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#services" className="text-white hover:text-[#90FF42] transition-colors py-2" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#projects" className="text-white hover:text-[#90FF42] transition-colors py-2" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#team" className="text-white hover:text-[#90FF42] transition-colors py-2" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#contact" className="bg-[#90FF42] text-black font-medium px-4 py-2 rounded-md hover:bg-[#7de339] transition-colors text-center" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
