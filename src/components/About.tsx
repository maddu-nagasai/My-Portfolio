import { Briefcase, GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import Lottie from "lottie-react";
import animeCharacter from "./LGjnGPsQXB.json"; // Fixed the import path

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Left Section - Text Content */}
          <div className="space-y-6 animate-fadeInLeft" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold">Objective</h3>
            <p className="text-foreground/80 leading-relaxed">
              Enthusiastic Software Developer Intern with hands-on experience in web development, 
              cloud platforms, and AI-driven applications. Strong background in designing and 
              implementing full-stack solutions using React.js, Node.js, Flask, and Django. 
              Experienced in working with Agile teams, version control, and deploying scalable 
              applications. Passionate about building impactful and innovative digital solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              {[ 
                { icon: Mail, label: "Email", value: "nagasai1050@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9177164725" },
                { icon: MapPin, label: "Location", value: "Guntur, India" }
              ].map(({ icon: Icon, label, value }, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Animated Anime Character */}
          <div className="flex justify-center items-center animate-fadeInRight" style={{ animationDelay: "0.4s" }}>
            <Lottie animationData={animeCharacter} loop={true} className="w-full max-w-xs md:max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
