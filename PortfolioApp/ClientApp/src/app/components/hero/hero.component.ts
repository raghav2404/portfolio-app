import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="min-h-screen flex items-center justify-center bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Raghav Rastogi
          </h1>
          <h2 class="text-2xl md:text-3xl mb-8 text-gray-300">
            Full Stack .NET Developer
          </h2>
          <p class="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            3+ years of experience building scalable enterprise applications with C#, .NET Core, Angular, and SQL Server
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get In Touch
            </a>
            <a href="#projects" class="border border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-primary { background-color: #0f0f0f; }
    .gradient-text {
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `]
})
export class HeroComponent { }