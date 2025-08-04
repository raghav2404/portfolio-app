import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-primary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <div class="section-divider mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="skill-category">
            <h3 class="text-xl font-bold mb-4 text-blue-400">Backend Technologies</h3>
            <div class="space-y-2">
              <div class="skill-item">C# (.NET 8, .NET Core)</div>
              <div class="skill-item">ASP.NET Web API</div>
              <div class="skill-item">Entity Framework Core</div>
              <div class="skill-item">SQL Server</div>
              <div class="skill-item">RESTful APIs</div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="text-xl font-bold mb-4 text-blue-400">Frontend Technologies</h3>
            <div class="space-y-2">
              <div class="skill-item">Angular 17</div>
              <div class="skill-item">TypeScript</div>
              <div class="skill-item">HTML5 & CSS3</div>
              <div class="skill-item">Tailwind CSS</div>
              <div class="skill-item">Responsive Design</div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="text-xl font-bold mb-4 text-blue-400">Tools & Platforms</h3>
            <div class="space-y-2">
              <div class="skill-item">Azure App Service</div>
              <div class="skill-item">Visual Studio</div>
              <div class="skill-item">Git & GitHub</div>
              <div class="skill-item">Docker</div>
              <div class="skill-item">Postman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-primary { background-color: #0f0f0f; }
    .section-divider {
      width: 6rem;
      height: 4px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    }
    .skill-category {
      background: #1a1a1a;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border: 1px solid #374151;
    }
    .skill-item {
      color: #d1d5db;
      padding: 0.5rem 0;
      border-bottom: 1px solid #374151;
    }
    .skill-item:last-child {
      border-bottom: none;
    }
  `]
})
export class SkillsComponent { }