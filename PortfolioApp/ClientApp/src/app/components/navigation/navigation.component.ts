import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="text-xl font-bold text-white">
            Raghav Rastogi
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a href="#hero" class="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" class="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" class="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#experience" class="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <button class="md:hidden text-white" (click)="toggleMenu()">
            <span class="sr-only">Toggle menu</span>
            ☰
          </button>
        </div>
        
        <div class="md:hidden" [class.hidden]="!isMenuOpen">
          <div class="pb-4 space-y-2">
            <a href="#hero" class="block py-2 text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" class="block py-2 text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" class="block py-2 text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#experience" class="block py-2 text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" class="block py-2 text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" class="block py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}