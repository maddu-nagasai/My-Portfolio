import { useState } from "react";
import Lottie from "lottie-react";
import animeCharacter from "./O4d30ABIDr.json"; // Ensure correct path

// Define the TimelineItem interface
interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string[];
}

// Experience Data
const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Summer Internship",
    organization: "IIIT Hyderabad",
    date: "Apr 2023 – Jun 2023",
    location: "Hyderabad, India",
    description: [
      "Flight Booking Platform Development | Flask & Web Technologies",
      "Worked on user authentication, flight search, booking system, and payment integration."
    ]
  },
  {
    id: 2,
    title: "Salesforce Developer Intern",
    organization: "Smartinternz",
    date: "Oct 2023 – Dec 2023",
    location: "India",
    description: [
      "Developed cloud applications using Salesforce Lightning, Apex, and LWC.",
      "Integrated Salesforce CRM with third-party APIs and automated workflows."
    ]
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    organization: "Alteryx",
    date: "Jul 2024 – Sep 2024",
    location: "India",
    description: [
      "Analyzed large datasets and automated workflows using Alteryx Designer."
    ]
  },
  {
    id: 4,
    title: "Web Developer Intern",
    organization: "Eduskills",
    date: "Oct 2024 – Dec 2024",
    location: "India",
    description: [
      "Built responsive web apps using the MERN stack.",
      "Implemented authentication, RESTful APIs, and optimized database queries."
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
                onClick={() => setSelectedItem(selectedItem?.id === item.id ? null : item)}
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
          
          <div className="glass-card rounded-2xl p-8 h-full flex items-center justify-center animate-fadeIn">
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
              <div className="flex items-center space-x-6">
                {/* Animation */}
                <Lottie 
                  animationData={animeCharacter} 
                  loop={true} 
                  className="w-64 h-64 md:w-80 md:h-80" // Large size
                />
                
                {/* Text beside animation */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground/70">
                  Select an Experience
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
