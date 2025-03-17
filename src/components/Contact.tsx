import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout for Contact Info & Picture */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Info */}
          <div className="order-2 md:order-1 space-y-8 animate-fadeInLeft" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-foreground/70">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <a href="mailto:nagasai1050@gmail.com" className="font-medium hover:text-primary transition-colors">
                    nagasai1050@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <a href="tel:+919177164725" className="font-medium hover:text-primary transition-colors">
                    +91 9177164725
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Location</p>
                  <p className="font-medium">Guntur, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/maddu-nagasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/maddu-nagasai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:nagasai1050@gmail.com"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

         {/* Right Side - Profile Image */}
<div className="order-1 md:order-2 flex justify-center">
  <img
    src="https://res.cloudinary.com/dm7jsi2cz/image/upload/v1742211458/WhatsApp_Image_2025-03-17_at_17.07.04_4e336d19_elquwe.jpg"  
    alt="Profile"
    className="rounded-lg shadow-lg w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover         hover:shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300"

  />
</div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
