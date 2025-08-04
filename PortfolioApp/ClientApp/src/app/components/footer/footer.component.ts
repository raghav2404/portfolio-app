import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-primary border-t border-tertiary py-8">
      <div class="container">
        <div class="text-center">
          <p class="text-secondary">
            © 2024 Raghav Rastogi. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .bg-primary { background-color: var(--bg-primary); }
    .border-tertiary { border-color: var(--bg-tertiary); }
    .text-secondary { color: var(--text-secondary); }
  `]
})
export class FooterComponent { }