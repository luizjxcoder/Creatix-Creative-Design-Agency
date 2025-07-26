import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

function Counter({ end, suffix = '', duration = 2000, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    if (inView) {
      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(startAnimation);
        }
      };

      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(startAnimation);
      }, delay);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, end, duration, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-black/90 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
            <div className="text-[#90FF42] font-bold text-4xl"><Counter end={2000} suffix="+" /></div>
            <div className="text-white/70 text-sm mt-1">Companies</div>
          </div>
          
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
            <div className="text-[#90FF42] font-bold text-4xl"><Counter end={10} suffix="+" delay={300} /></div>
            <div className="text-white/70 text-sm mt-1">Years Exp</div>
          </div>
          
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
            <div className="text-[#90FF42] font-bold text-4xl"><Counter end={800} suffix="+" delay={600} /></div>
            <div className="text-white/70 text-sm mt-1">Hours of Digital</div>
          </div>
          
          <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-white/5">
            <div className="text-[#90FF42] font-bold text-4xl"><Counter end={150} suffix="M+" delay={900} /></div>
            <div className="text-white/70 text-sm mt-1">In Tracked Revenue</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
