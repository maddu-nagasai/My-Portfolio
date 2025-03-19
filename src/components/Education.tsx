import Lottie from "lottie-react";
import animeCharacter from "./Animation - 1742344486285.json"; // Replace with your desired animation file

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex items-center justify-center">
                <Lottie 
                  animationData={animeCharacter} 
                  loop={true} 
                  className="w-40 h-40 md:w-52 md:h-52"
                />
              </div>

              <div className="md:w-2/3 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">KIET Group of Institutions</h3>
                  <p className="text-foreground/70">2021 – 2025 | Kakinada, India</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Networking",
                      "Operating Systems",
                      "Data Structures",
                      "Analysis of Algorithms",
                      "Databases",
                      "Statistics",
                      "Machine Learning"
                    ].map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="h-2 w-full bg-primary/10 rounded-full">
                    <div className="h-full bg-primary rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-foreground/70">Progress</span>
                    <span className="font-medium">Final Year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="font-semibold text-lg mb-4">Educational Journey</h4>

              <div className="relative pl-8">
                <div className="timeline-line"></div>

                {[
                  { title: "Admission to KIET", year: "2021", desc: "Began B.Tech journey in Computer Science" },
                  { title: "First Internship", year: "2023", desc: "Summer Internship at IIIT Hyderabad" },
                  { title: "Salesforce Developer Internship", year: "2023", desc: "Worked on cloud-based applications using Salesforce" },
                  { title: "Data Analytics Internship", year: "2024", desc: "Analyzed large datasets and built predictive models" },
                  { title: "Web Developer Internship", year: "2024", desc: "Developed full-stack web applications using MERN" },
                  { title: "Present", year: "2025", desc: "Final year - focusing on advanced technologies and career opportunities" }
                ].map((event, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="timeline-dot absolute -left-8 top-0"></div>
                    <div className="glass-card rounded-lg p-4">
                      <h5 className="font-medium">{event.title}</h5>
                      <p className="text-sm text-foreground/70">{event.year}</p>
                      <p className="mt-2 text-foreground/80">{event.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
