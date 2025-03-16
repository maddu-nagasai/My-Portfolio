
import Header from "@/components/Header";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";

const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Education />
        <Certificates />
      </main>
    </div>
  );
};

export default EducationPage;
