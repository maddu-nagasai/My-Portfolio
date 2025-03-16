import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Code2, Terminal, Database, Cloud } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      
      {/* Subtle Moving Blue Background */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl animate-slowMove"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-3xl animate-slowMove"></div>
      </div>
      
      
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
                <br></br>
                {/* Typewriter Animation */}
            <TypeAnimation
              sequence={[
                "I'm a SDE Intern",
                2000,
                "I build web solutions",
                2000,
                "I explore cloud technologies",
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
                  transition={{ delay: 1.2 }}
                  className="flex gap-6 mt-12"
                >
                  <Code2 className="w-8 h-8 text-blue-400" />
                  <Terminal className="w-8 h-8 text-green-400" />
                  <Database className="w-8 h-8 text-purple-400" />
                  <Cloud className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </div>

              <br>
              
              </br>
              
              <div>
                <h2>
                  I'm an . . .
                </h2>
              <p className="text-foreground/70 text-lg max-w-lg">
                Enthusiastic Software Developer with hands-on experience in web development, 
                cloud platforms, and AI-driven applications. Passionate about building 
                impactful and innovative digital solutions.
              </p>
              </div>
              
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </a>
                <a 
                  href="#about" 
                  className="px-6 py-3 border border-border rounded-lg hover:bg-accent/30 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Maddu Nagasai"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Software Developer</span>
              </div>
              
              
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a 
            href="#about" 
            className="w-10 h-10 rounded-full flex items-center justify-center border border-border animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
