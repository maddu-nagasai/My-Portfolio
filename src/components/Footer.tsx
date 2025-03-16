
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display text-xl font-semibold">
              <span className="text-gradient">Maddu Nagasai</span>
            </div>
            <p className="text-foreground/60 text-sm mt-1">Software Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-accent/30 transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
            
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Maddu Nagasai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
