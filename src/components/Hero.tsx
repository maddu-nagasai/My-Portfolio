import { Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Code2, Terminal, Database, Cloud } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";



export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient"
      ref={heroRef}
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(255,255,255,0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%'
      }}
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl text-foreground/70 font-medium">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mt-2">
                  Maddu Nagasai
                </h1>
                <br />
                {/* Typewriter Animation */}
                <TypeAnimation
                  sequence={[
                    "I'm a SDE Intern...",
                    2000,
                    "I build web solutions...",
                    2000,
                    "I explore cloud technologies...",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl md:text-3xl text-blue-400 mb-8"
                />
                {/* Tech Stack Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="flex gap-6 mt-12"
                >
                  <Code2 className="w-8 h-8 text-blue-400 glow-icon animate-float" />
                  <Terminal className="w-8 h-8 text-green-400 glow-icon animate-float" style={{ animationDelay: "0.2s" }} />
                  <Database className="w-8 h-8 text-purple-400 glow-icon animate-float" style={{ animationDelay: "0.4s" }} />
                  <Cloud className="w-8 h-8 text-yellow-400 glow-icon animate-float" style={{ animationDelay: "0.6s" }} />
                </motion.div>
              </div>
              <br />
              <div>
                <h2>I'm an . . .</h2>
                <p className="text-foreground/70 text-lg max-w-lg">
                  Enthusiastic Software Developer with hands-on experience in web development, 
                  cloud platforms, and AI-driven applications. Passionate about building 
                  impactful and innovative digital solutions.
                </p>
              </div>
              {/* Buttons (Contact & Resume) */}
              <div className="flex gap-4">
                {/* Contact Button */}
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Mail size={20} /> Contact Me
                </Link>


                {/* Resume Button - Now next to Contact */}
                <a 
                  href="https://drive.google.com/file/d/1uNHNkfzyOiV7rx5c2r0jtAXu9kJvw95b/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <FileText size={20} /> Resume
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-lg
        hover:shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300">
      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dgpiiljnj/image/upload/v1740339296/hero_cyr2jj.jpg"
          alt="Maddu Nagasai"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 glass-card px-4 py-2 rounded-lg">
      <span className="text-sm font-medium">Software Developer</span>
    </div>
  </div>
</div> 

        </div>
      </div>
    </section>
  );
}

export default Hero;
