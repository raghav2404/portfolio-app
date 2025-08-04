import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, CreditCard, Users } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Loan Monitoring and E-Loan Data",
      icon: <Building className="text-[hsl(207,90%,54%)]" size={32} />,
      hoverColor: "group-hover:text-[hsl(207,90%,54%)]",
      borderColor: "hover:border-[hsl(207,90%,54%)]",
      features: [
        "Developed new API version for e-Consent application with endpoints for personal customers to activate and reject consents",
        "Built Remortgage Evaluation service with EF Core, REST endpoints, and credit score integration",
        "Refactored monolithic shared service into modular NuGet packages with CI/CD setup",
        "Implemented Hangfire dashboards for batch job processing and monitoring",
        "Enhanced Angular Consent UI consuming e-Consent API via Backend-For-Frontend pattern"
      ],
      technologies: [
        { name: ".NET Core", color: "bg-[hsl(207,90%,54%)]/20 text-[hsl(207,90%,54%)]" },
        { name: "Entity Framework", color: "bg-[hsl(142,76%,36%)]/20 text-[hsl(142,76%,36%)]" },
        { name: "Angular", color: "bg-[hsl(359,82%,59%)]/20 text-[hsl(359,82%,59%)]" },
        { name: "SQL Server", color: "bg-purple-500/20 text-purple-400" },
        { name: "xUnit", color: "bg-blue-500/20 text-blue-400" }
      ]
    },
    {
      title: "Free Of Payments (FOP Tool)",
      icon: <CreditCard className="text-[hsl(142,76%,36%)]" size={32} />,
      hoverColor: "group-hover:text-[hsl(142,76%,36%)]",
      borderColor: "hover:border-[hsl(142,76%,36%)]",
      features: [
        "Migrated backend application from IIS to OpenShift, improving performance and scalability",
        "Developed Fee Calculator Logic for transaction fees and commissions in custody account system",
        "Built .NET 6 solution with Quartz Scheduler and Dapper for automated GDPR data cleanup",
        "Optimized SQL queries and implemented stored procedures for enhanced database performance",
        "Designed Angular POC forms for Free of Payments UI with user-friendly interfaces"
      ],
      technologies: [
        { name: ".NET 6", color: "bg-[hsl(207,90%,54%)]/20 text-[hsl(207,90%,54%)]" },
        { name: "OpenShift", color: "bg-[hsl(142,76%,36%)]/20 text-[hsl(142,76%,36%)]" },
        { name: "Quartz Scheduler", color: "bg-[hsl(359,82%,59%)]/20 text-[hsl(359,82%,59%)]" },
        { name: "Dapper", color: "bg-purple-500/20 text-purple-400" },
        { name: "Angular", color: "bg-pink-500/20 text-pink-400" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] ${project.borderColor} transition-all duration-300 group`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[hsl(207,90%,54%)]/20 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${project.hoverColor} transition-colors`}>
                    {project.title}
                  </h3>
                </div>
                
                <div className="space-y-4 text-[hsl(215,20%,65%)] mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <p key={featureIndex}>• {feature}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={`${tech.color} border-0`}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra-Curricular */}
        <Card className="bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)]">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 text-center gradient-text">Extra-Curricular Activities</h3>
            <Card className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-[hsl(207,90%,54%)] mr-3" size={20} />
                  <h4 className="text-lg font-semibold">Campus Ambassador - CodeHive Society</h4>
                </div>
                <p className="text-[hsl(215,20%,65%)] text-sm mb-2">08/2020 – 05/2021</p>
                <p className="text-[hsl(215,20%,65%)]">
                  Collaborated with fellow members to create android applications like step counter and conducted workshops.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
