
import { Award } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  description?: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Foundations Of Model Machine Learning",
    issuer: "IIITH",
    date: "2023"
  },
  {
    id: 2,
    title: "NLP AI-THON",
    issuer: "KIET COLLEGE KAKINADA",
    description: "We developed a Language translator Website in Hackathon @ KIET COLLEGE KAKINADA"
  },
  {
    id: 3,
    title: "Python",
    issuer: "Ineuron",
    date: "2022"
  },
  {
    id: 4,
    title: "SalesForce Developer",
    issuer: "TrailBlazer",
    description: "We Done Internship At TrailBlazer",
    date: "2023"
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificatesData.map((certificate, index) => (
            <div 
              key={certificate.id}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-primary/50 animate-fadeIn flex flex-col"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award size={20} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{certificate.title}</h3>
              <p className="text-foreground/70 text-sm mb-2">Issued by {certificate.issuer}</p>
              
              {certificate.date && (
                <p className="text-foreground/50 text-xs">{certificate.date}</p>
              )}
              
              {certificate.description && (
                <p className="text-foreground/70 text-sm mt-4">{certificate.description}</p>
              )}
              
              <div className="mt-auto pt-4">
                <button className="text-primary text-sm hover:underline">View Certificate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
