import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[hsl(220,13%,9%)]/95 backdrop-blur-sm border-b border-[hsl(216,7%,18%)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold gradient-text">Raghav Rastogi</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[hsl(207,90%,54%)] transition-colors px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(210,40%,98%)] hover:text-[hsl(207,90%,54%)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(217,16%,12%)] border-t border-[hsl(216,7%,18%)]">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium hover:text-[hsl(207,90%,54%)] transition-colors w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
