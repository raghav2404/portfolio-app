import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Experience</h2>
          <div class="section-divider mx-auto"></div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="experience-item">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Software Developer</h3>
                <p class="text-blue-400 font-semibold">Danske Bank</p>
              </div>
              <span class="text-gray-400 font-medium">2021 - Present</span>
            </div>
            <ul class="text-gray-300 space-y-2 mb-6">
              <li>• Developed and maintained E-LoanData microservices using .NET Core and SQL Server</li>
              <li>• Built scalable REST APIs serving millions of financial data requests daily</li>
              <li>• Implemented automated testing and CI/CD pipelines improving deployment efficiency by 40%</li>
              <li>• Collaborated with cross-functional teams in Agile development environment</li>
              <li>• Optimized database queries reducing response times by 30%</li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">C#</span>
              <span class="tech-tag">.NET Core</span>
              <span class="tech-tag">SQL Server</span>
              <span class="tech-tag">Microservices</span>
              <span class="tech-tag">REST APIs</span>
            </div>
          </div>
          
          <div class="experience-item">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Junior .NET Developer</h3>
                <p class="text-blue-400 font-semibold">Previous Company</p>
              </div>
              <span class="text-gray-400 font-medium">2020 - 2021</span>
            </div>
            <ul class="text-gray-300 space-y-2 mb-6">
              <li>• Developed web applications using ASP.NET MVC and Entity Framework</li>
              <li>• Created responsive frontend interfaces with HTML5, CSS3, and JavaScript</li>
              <li>• Participated in code reviews and maintained coding standards</li>
              <li>• Assisted in database design and stored procedure development</li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span class="tech-tag">ASP.NET MVC</span>
              <span class="tech-tag">Entity Framework</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">HTML/CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-secondary { background-color: #1a1a1a; }
    .section-divider {
      width: 6rem;
      height: 4px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    }
    .experience-item {
      background: #0f0f0f;
      padding: 2rem;
      border-radius: 0.5rem;
      border: 1px solid #374151;
      margin-bottom: 2rem;
    }
    .experience-item:last-child {
      margin-bottom: 0;
    }
    .tech-tag {
      background: #3b82f6;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  `]
})
export class ExperienceComponent { }