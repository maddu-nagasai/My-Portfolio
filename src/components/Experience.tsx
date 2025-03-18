
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
    title: "Summer Internship",
    organization: "IIIT Hyderabad",
    date: "Apr 2023 – Jun 2023",
    location: "Hyderabad, India",
    description: [
      "Flight Booking Platform Development | Flask & Web Technologies",
      "During my summer internship at IIIT Hyderabad, I worked on developing a website-based Flight Booking Platform using Flask as the backend framework.",
      "I was responsible for designing and implementing key functionalities such as user authentication, flight search, booking system, and payment integration."
    ]
  },
  {
    id: 2,
    title: "Salesforce Developer Intern",
    organization: "Smartinternz",
    date: "oct 2023 – Dec 2023",
    location: "India",
    description: [
        "Developed and deployed cloud-based applications using Salesforce Lightning, Apex, and LWC (Lightning Web Components).",
        "Integrated Salesforce CRM with third-party APIs and automated workflows using Process Builder and Flow.",
        "Implemented authentication and role-based access control using Salesforce Security & OAuth 2.0.",
        "Worked on data modeling, SOQL queries, and Apex triggers to optimize database interactions.",
        "Collaborated in an Agile environment, using Git for version control and Jira for task management.",
        "Gained hands-on experience with Salesforce AppExchange and App Builder to create custom solutions.",
        "Participated in Salesforce Trailhead modules and certifications to enhance platform expertise.",
        "Implemented CI/CD for Salesforce applications using Salesforce DevOps Center and GitHub Actions.",
        "Worked on real-world business use cases and developed solutions aligning with industry best practices."
      ]
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    organization: "Alteryx",
    date: "Jul 2024 – Sep 2024",
    location: "India",
    description: [
      "Analyzed large datasets using Alteryx Designer to clean, transform, and visualize data for business insights.",
      "Developed automated workflows for data preparation, blending, and predictive analytics using Alteryx tools.",
      "Utilized SQL to extract, manipulate, and analyze structured data from relational databases.",
      "Generated interactive dashboards and reports using Alteryx and Tableau to support data-driven decision-making.",
      "Implemented statistical models and machine learning algorithms to identify trends and anomalies in datasets.",
      "Optimized ETL pipelines and improved data processing efficiency using Alteryx macros and in-database processing.",
      "Collaborated with cross-functional teams to interpret analytical results and provide actionable recommendations.",
      "Explored cloud-based data integration with Alteryx Server for scalable analytics solutions.",
      "Worked on real-world business problems and delivered insights through hands-on projects using Alteryx workflows."
    ]
    
  },
  {
    id: 4,
    title: "Web Developer Intern",
    organization: "Eduskills",
    date: "Oct 2024 – Dec 2024",
    location: "India",
    description: [
      "Developed responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designed and implemented user-friendly UI with HTML, CSS (Tailwind, Bootstrap), and JavaScript.",
      "Integrated authentication & authorization using JWT, OAuth, and Firebase for secure access.",
      "Built RESTful APIs and optimized database queries for efficient data management.",
      "Ensured cross-browser compatibility, responsive design, and SEO optimization.",
      "Worked with Agile methodologies, Git, and CI/CD pipelines for streamlined deployment.",
      "Implemented WebSockets for real-time features like live chat and notifications.",
      "Explored cloud solutions (AWS, Firebase, Vercel) for hosting and backend services.",
      "Developed unit tests and debugging strategies to enhance code reliability.",
      "Documented project architecture and collaborated in a team environment."
    ]    
  },
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
