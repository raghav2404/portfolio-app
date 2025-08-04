import { Card, CardContent } from "@/components/ui/card";
import { Plane, Target, Code, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[hsl(217,16%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Summary</h3>
            <p className="text-[hsl(215,20%,65%)] text-lg leading-relaxed mb-6">
              Software developer with 3+ years of experience in C#, .NET Core, APIs, SQL Server, EF Core and Angular. 
              Experienced in developing and deploying enterprise-grade microservices-based solutions in BFSI domain.
            </p>
            <p className="text-[hsl(215,20%,65%)] text-lg leading-relaxed mb-6">
              Strong background in creating efficient scalable APIs, integrating with databases, UI, and ensuring 
              code quality through unit testing. Currently working at Infosys Limited as Senior Systems Engineer 
              for Danske Bank client within the E-LoanData team.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[hsl(207,90%,54%)] mb-2">Experience</h4>
                <p className="text-[hsl(215,20%,65%)]">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(207,90%,54%)] mb-2">Education</h4>
                <p className="text-[hsl(215,20%,65%)]">B.Tech CS (CGPA: 9.45)</p>
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(207,90%,54%)] mb-2">Location</h4>
                <p className="text-[hsl(215,20%,65%)]">Lucknow, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-[hsl(207,90%,54%)] mb-2">Languages</h4>
                <p className="text-[hsl(215,20%,65%)]">English, Hindi</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <Card className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Interests & Hobbies</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Plane className="text-[hsl(207,90%,54%)] mr-4" size={20} />
                    <span>Travelling & Exploring new places</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="text-[hsl(142,76%,36%)] mr-4" size={20} />
                    <span>Cricket enthusiast</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="text-[hsl(359,82%,59%)] mr-4" size={20} />
                    <span>Competitive Programming</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[hsl(217,16%,12%)] rounded-lg border border-[hsl(216,7%,18%)]">
                    <span>AZ900 - Microsoft Azure Fundamentals</span>
                    <Award className="text-[hsl(207,90%,54%)]" size={20} />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[hsl(217,16%,12%)] rounded-lg border border-[hsl(216,7%,18%)]">
                    <span>Foundational C# with Microsoft</span>
                    <Award className="text-[hsl(207,90%,54%)]" size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
