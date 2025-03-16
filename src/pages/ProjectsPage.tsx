
import Header from "@/components/Header";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
