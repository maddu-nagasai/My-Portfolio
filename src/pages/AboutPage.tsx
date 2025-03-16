
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default AboutPage;
