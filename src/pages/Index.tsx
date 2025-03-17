import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="certificates"><Certificates /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};



export default Index;
