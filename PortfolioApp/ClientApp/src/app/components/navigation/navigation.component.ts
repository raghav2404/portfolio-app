import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full bg-primary backdrop-blur-sm border-b border-tertiary z-50">
      <div class="container">
        <div class="flex items-center justify-between h-16">
          <div class="text-xl font-bold gradient-text">Raghav Rastogi</div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-8">
              <button 
                *ngFor="let item of navItems"
                (click)="scrollToSection(item.id)"
                class="hover:text-accent-blue transition-colors px-3 py-2 text-sm font-medium"
              >
                {{ item.label }}
              </button>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              (click)="toggleMobileMenu()"
              class="text-primary hover:text-accent-blue"
            >
              <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg *ngIf="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-secondary border-t border-tertiary">
          <button 
            *ngFor="let item of navItems"
            (click)="scrollToSection(item.id)"
            class="block px-3 py-2 text-base font-medium hover:text-accent-blue transition-colors w-full text-left"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .bg-primary {
      background-color: var(--bg-primary);
      opacity: 0.95;
    }
    .bg-secondary {
      background-color: var(--bg-secondary);
    }
    .border-tertiary {
      border-color: var(--bg-tertiary);
    }
    .text-primary {
      color: var(--text-primary);
    }
    .text-accent-blue {
      color: var(--accent-blue);
    }
  `]
})
export class NavigationComponent {
  isMobileMenuOpen = false;
  
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    this.isMobileMenuOpen = false;
  }
}