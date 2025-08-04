import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div class="section-divider mx-auto"></div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-lg text-gray-300 leading-relaxed">
              Passionate Full Stack .NET Developer with 3+ years of experience building scalable enterprise applications. 
              I specialize in modern web technologies including C#, .NET Core, Angular, and SQL Server, with a strong focus on 
              clean code principles and efficient problem-solving.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-blue-400">Professional Background</h3>
              <p class="text-gray-300">
                Currently working at Danske Bank as a Software Developer, developing enterprise-grade microservices 
                for financial data management. Experienced in Agile methodologies and collaborative development environments.
              </p>
              
              <h3 class="text-xl font-bold text-blue-400">Education</h3>
              <p class="text-gray-300">
                Master of Technology in Computer Science Engineering with a focus on software architecture and database systems.
              </p>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-blue-400">Key Strengths</h3>
              <ul class="text-gray-300 space-y-2">
                <li>• Enterprise application development</li>
                <li>• Microservices architecture</li>
                <li>• Database design and optimization</li>
                <li>• API development and integration</li>
                <li>• Modern frontend frameworks</li>
                <li>• Cloud deployment (Azure)</li>
              </ul>
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
  `]
})
export class AboutComponent { }