import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#90FF42]/5 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="#" className="flex items-center text-white text-2xl font-bold mb-4">
              <span className="text-[#90FF42] mr-1">•</span> Creatix
            </a>
            <p className="text-gray-400 mb-6">
              Empowering brands through creative solutions. We transform ideas into digital masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 hover:bg-[#90FF42]/20 hover:text-[#90FF42] text-white p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#90FF42]/20 hover:text-[#90FF42] text-white p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#90FF42]/20 hover:text-[#90FF42] text-white p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-[#90FF42]/20 hover:text-[#90FF42] text-white p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-[#90FF42] transition-colors">UX/UI Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#90FF42] transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#90FF42] transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#90FF42] transition-colors">3D Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#90FF42] transition-colors">Motion Graphics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about-us" className="text-gray-400 hover:text-[#90FF42] transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#90FF42] transition-colors">Portfolio</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#90FF42] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#90FF42] transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#90FF42] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-black/50 border border-white/10 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-[#90FF42]/50 w-full"
                />
                <button
                  type="submit"
                  className="bg-[#90FF42] text-black font-medium px-4 rounded-r-lg hover:bg-[#7de339] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Creatix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-[#90FF42]">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#90FF42]">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#90FF42]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
