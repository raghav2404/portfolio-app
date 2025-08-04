import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User, Github, Linkedin, Code } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // Create a simple alert for now - in a real implementation, this would download the actual resume
    alert('Resume download functionality - Please contact directly at raghavrastogi1990@gmail.com for resume.');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,13%,9%)] via-[hsl(217,16%,12%)] to-[hsl(220,13%,9%)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional photo placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] p-1 animate-float">
            <div className="w-full h-full rounded-full bg-[hsl(217,16%,12%)] flex items-center justify-center">
              <User className="text-6xl text-[hsl(215,20%,65%)]" size={96} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Raghav Rastogi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[hsl(215,20%,65%)] mb-8 max-w-3xl mx-auto">
            Full Stack .NET Developer with 3+ years of experience in building scalable enterprise solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleDownloadResume}
              className="bg-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,44%)] text-white px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-[hsl(207,90%,54%)] text-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,54%)] hover:text-white px-8 py-3 font-semibold transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/raghav-rastogi-306206197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(215,20%,65%)] hover:text-[hsl(207,90%,54%)] transition-colors text-2xl"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/raghav2404" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(215,20%,65%)] hover:text-[hsl(207,90%,54%)] transition-colors text-2xl"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://leetcode.com/u/raghavrastogi1990/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[hsl(215,20%,65%)] hover:text-[hsl(207,90%,54%)] transition-colors text-2xl"
            >
              <Code size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
