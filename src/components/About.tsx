
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeInLeft" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold">Objective</h3>
            <p className="text-foreground/80 leading-relaxed">
              Enthusiastic Software Developer Intern with hands-on experience in web development, 
              cloud platforms, and AI-driven applications. Strong background in designing and 
              implementing full-stack solutions using React.js, Node.js, Flask, and Django. 
              Experienced in working with Agile teams, version control, and deploying scalable 
              applications. Passionate about building impactful and innovative digital solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-medium">nagasai1050@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <p className="font-medium">+91 9177164725</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Location</p>
                  <p className="font-medium">Guntur, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 animate-fadeInRight" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-foreground/70 mt-1">B.tech, KIET group of institutions</p>
                  <p className="text-sm text-foreground/60">2021 – 2025 | Kakinada, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <p className="text-foreground/70 mt-1">Web Developer Intern at Eduskills</p>
                  <p className="text-sm text-foreground/60">Oct 2024 – Dec 2024 | India</p>
                  <div className="mt-4">
                    <p className="text-foreground/70 mt-1">Summer Internship at IIIT Hyderabad</p>
                    <p className="text-sm text-foreground/60">Apr 2023 – Jun 2023 | Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
