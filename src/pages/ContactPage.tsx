
import Header from "@/components/Header";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
