import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Bug, Cloud, GitBranch, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="text-[hsl(207,90%,54%)]" size={24} />,
      borderColor: "hover:border-[hsl(207,90%,54%)]",
      skills: ["C#", ".NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "LINQ", "Angular", "TypeScript", "HTML5", "CSS3", "RabbitMQ"]
    },
    {
      title: "Databases",
      icon: <Database className="text-[hsl(142,76%,36%)]" size={24} />,
      borderColor: "hover:border-[hsl(142,76%,36%)]",
      skills: ["Microsoft SQL Server", "T-SQL", "Stored Procedures", "Triggers"]
    },
    {
      title: "Testing",
      icon: <Bug className="text-[hsl(359,82%,59%)]" size={24} />,
      borderColor: "hover:border-[hsl(359,82%,59%)]",
      skills: ["Unit Testing", "xUnit", "Integration Testing", "TDD"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="text-[hsl(207,90%,54%)]" size={24} />,
      borderColor: "hover:border-[hsl(207,90%,54%)]",
      skills: ["Azure DevOps", "CI/CD", "OpenShift", "Microsoft Azure"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="text-[hsl(142,76%,36%)]" size={24} />,
      borderColor: "hover:border-[hsl(142,76%,36%)]",
      skills: ["Git", "GitHub", "Branching Strategies"]
    },
    {
      title: "Other Tools",
      icon: <Wrench className="text-[hsl(359,82%,59%)]" size={24} />,
      borderColor: "hover:border-[hsl(359,82%,59%)]",
      skills: ["ELK Stack", "Postman", "JIRA", "Hangfire"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-[hsl(217,16%,12%)] border-[hsl(216,7%,18%)] ${category.borderColor} transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="skill-badge bg-[hsl(220,13%,9%)] text-[hsl(210,40%,98%)] border-[hsl(216,7%,18%)] hover:bg-[hsl(216,7%,18%)]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
