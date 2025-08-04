import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Systems Engineer",
      company: "Infosys Limited",
      period: "09/2023 – Present",
      location: "Bengaluru, India",
      status: "Current",
      statusColor: "bg-[hsl(142,76%,36%)] text-[hsl(220,13%,9%)]",
      dotColor: "bg-[hsl(207,90%,54%)]",
      titleColor: "text-[hsl(207,90%,54%)]",
      description: "Strategic partnership with Infosys led to acquisition of Danske IT. Currently working for Danske Bank client within the E-LoanData team in Core Financing Platform on projects related to Remortgage and Consent management."
    },
    {
      title: "Associate Software Engineer",
      company: "Danske IT and Support Services",
      period: "07/2022 – 08/2023",
      location: "Bengaluru, India",
      dotColor: "bg-[hsl(142,76%,36%)]",
      titleColor: "text-[hsl(142,76%,36%)]",
      description: "Contributed to the Fund Settlement Team in Market Post Trade services."
    },
    {
      title: "Associate Software Engineer Intern",
      company: "Danske IT and Support Services",
      period: "01/2022 – 07/2022",
      location: "Bengaluru, India",
      dotColor: "bg-[hsl(359,82%,59%)]",
      titleColor: "text-[hsl(359,82%,59%)]",
      description: "Contributed to Gold Squad in Market Post Trade Services."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM University",
      period: "2018 – 2022",
      location: "Chennai",
      grade: "CGPA: 9.45/10",
      gradeColor: "text-[hsl(142,76%,36%)]"
    },
    {
      degree: "Class XII (ISC)",
      institution: "St' Francis College",
      period: "2017 – 2018",
      location: "Lucknow",
      grade: "Secured: 90%",
      gradeColor: "text-[hsl(142,76%,36%)]"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(217,16%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)] mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(207,90%,54%)] to-[hsl(142,76%,36%)]"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 ${exp.dotColor} rounded-full border-4 border-[hsl(217,16%,12%)]`}></div>
                <Card className="ml-20 bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)] w-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${exp.titleColor}`}>{exp.title}</h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-[hsl(215,20%,65%)]">
                        {exp.status && (
                          <Badge className={`${exp.statusColor} px-2 py-1 text-sm font-medium mb-1`}>
                            {exp.status}
                          </Badge>
                        )}
                        <p className="text-sm">{exp.period} | {exp.location}</p>
                      </div>
                    </div>
                    <p className="text-[hsl(215,20%,65%)] leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-[hsl(220,13%,9%)] border-[hsl(216,7%,18%)]">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[hsl(207,90%,54%)] mb-2">{edu.degree}</h4>
                  <p className="font-semibold mb-2">{edu.institution}</p>
                  <p className="text-[hsl(215,20%,65%)] text-sm mb-2">{edu.period} | {edu.location}</p>
                  <p className={`${edu.gradeColor} font-semibold`}>{edu.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
