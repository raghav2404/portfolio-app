import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-primary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div class="section-divider mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="project-card">
            <h3 class="text-xl font-bold mb-3 text-white">E-LoanData Microservices</h3>
            <p class="text-gray-400 mb-4">
              Enterprise-grade microservices architecture for loan data management at Danske Bank using .NET Core and SQL Server.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">.NET Core</span>
              <span class="tech-tag">SQL Server</span>
              <span class="tech-tag">Microservices</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3 class="text-xl font-bold mb-3 text-white">Angular Portfolio Website</h3>
            <p class="text-gray-400 mb-4">
              Modern responsive portfolio website built with Angular 17 and .NET 8 Web API, deployed on Azure App Service.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">Angular 17</span>
              <span class="tech-tag">.NET 8</span>
              <span class="tech-tag">Azure</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3 class="text-xl font-bold mb-3 text-white">RESTful API Development</h3>
            <p class="text-gray-400 mb-4">
              Scalable REST APIs with Entity Framework Core, implementing clean architecture and SOLID principles.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-tag">ASP.NET Web API</span>
              <span class="tech-tag">EF Core</span>
              <span class="tech-tag">Clean Architecture</span>
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
    .project-card {
      background: #1a1a1a;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border: 1px solid #374151;
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
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
export class ProjectsComponent { }