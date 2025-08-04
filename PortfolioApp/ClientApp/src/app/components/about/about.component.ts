import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-secondary">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div class="section-divider"></div>
        </div>
        <div class="about-content">
          <div class="about-text animate-slide-up">
            <h3 class="text-2xl font-bold mb-6 gradient-text">Professional Summary</h3>
            <p class="text-secondary text-lg leading-relaxed mb-6">
              Software developer with 3+ years of experience in C#, .NET Core, APIs, SQL Server, EF Core and Angular. 
              Experienced in developing and deploying enterprise-grade microservices-based solutions in BFSI domain.
            </p>
            <p class="text-secondary text-lg leading-relaxed mb-6">
              Strong background in creating efficient scalable APIs, integrating with databases, UI, and ensuring 
              code quality through unit testing. Currently working at Infosys Limited as Senior Systems Engineer 
              for Danske Bank client within the E-LoanData team.
            </p>
            
            <div class="info-grid">
              <div class="info-item">
                <h4 class="font-semibold text-accent-blue mb-2">Experience</h4>
                <p class="text-secondary">3+ Years</p>
              </div>
              <div class="info-item">
                <h4 class="font-semibold text-accent-blue mb-2">Education</h4>
                <p class="text-secondary">B.Tech CS (CGPA: 9.45)</p>
              </div>
              <div class="info-item">
                <h4 class="font-semibold text-accent-blue mb-2">Location</h4>
                <p class="text-secondary">Lucknow, India</p>
              </div>
              <div class="info-item">
                <h4 class="font-semibold text-accent-blue mb-2">Languages</h4>
                <p class="text-secondary">English, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-secondary { background-color: var(--bg-secondary); }
    .text-secondary { color: var(--text-secondary); }
    .text-accent-blue { color: var(--accent-blue); }
    .section-divider {
      width: 6rem;
      height: 4px;
      background: var(--gradient-primary);
      margin: 0 auto;
    }
    .about-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    @media (min-width: 1024px) {
      .about-content {
        grid-template-columns: 1fr 1fr;
      }
    }
  `]
})
export class AboutComponent { }