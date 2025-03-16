
import Header from "@/components/Header";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;
