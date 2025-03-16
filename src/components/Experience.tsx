
import { useState } from "react";
import { motion } from "framer-motion";

// Note: We would need to add framer-motion as a dependency
interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string[];
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    organization: "Eduskills",
    date: "Oct 2024 – Dec 2024",
    location: "India",
    description: [
      "Developed and maintained responsive web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
      "Integrated authentication & authorization using JWT and OAuth for secure user access.",
      "Collaborated with a team using Git, Agile methodologies, and CI/CD pipelines for efficient development and deployment."
    ]
  },
  {
    id: 2,
    title: "Summer Internship",
    organization: "IIIT Hyderabad",
    date: "Apr 2023 – Jun 2023",
    location: "Hyderabad, India",
    description: [
      "Flight Booking Platform Development | Flask & Web Technologies",
      "During my summer internship at IIIT Hyderabad, I worked on developing a website-based Flight Booking Platform using Flask as the backend framework.",
      "I was responsible for designing and implementing key functionalities such as user authentication, flight search, booking system, and payment integration."
    ]
  }
];

export function Experience() {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <div className="space-y-6">
            {experienceData.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`cursor-pointer glass-card rounded-xl px-5 py-4 transition-all duration-300 hover:border-primary/50 ${
                  selectedItem?.id === item.id ? "border-primary" : ""
                }`}
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.organization}</p>
                <p className="text-foreground/50 text-xs mt-2">{item.date}</p>
              </div>
            ))}
          </div>
          
          <div className="glass-card rounded-2xl p-8 h-full animate-fadeIn">
            {selectedItem ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  <p className="text-foreground/70">
                    {selectedItem.organization} | {selectedItem.date}
                  </p>
                  <p className="text-foreground/60 text-sm">{selectedItem.location}</p>
                </div>
                
                <div className="mt-4 space-y-3">
                  {selectedItem.description.map((point, index) => (
                    <p key={index} className="text-foreground/80 flex">
                      <span className="mr-2 text-primary">•</span>
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-foreground/50">Select an experience to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
