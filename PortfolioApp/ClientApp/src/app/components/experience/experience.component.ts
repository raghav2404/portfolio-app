import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="experience" class="py-20 bg-secondary"><div class="container"><h2>Professional Experience</h2></div></section>`,
  styles: [`.bg-secondary { background-color: var(--bg-secondary); }`]
})
export class ExperienceComponent { }