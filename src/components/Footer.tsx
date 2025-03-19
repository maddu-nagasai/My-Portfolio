import { ArrowUp } from "lucide-react";
import Lottie from "lottie-react";
import footerAnimation from "./Animation - 1742345466109.json"; // Replace with your desired animation file

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-background py-1 border - t">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-1 md:mb-0">
            <div className="font-display text-5xl font-semibold">
              <span className="text-gradient">Maddu Nagasai</span>
            </div>
            <p className="text-foreground/60 text-lg mt-2">Software Developer</p>
            
          </div>
          {/* {animation} */}
          <Lottie 
              animationData={footerAnimation} 
              loop={true} 
              className="w-40 h-40 mb-4"
            />
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent/30 transition-colors mb-4 "
              aria-label="Scroll to top"
            >
              <ArrowUp size={30} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
