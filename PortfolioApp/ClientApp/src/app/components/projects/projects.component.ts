import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="projects" class="py-20"><div class="container"><h2>Featured Projects</h2></div></section>`,
  styles: []
})
export class ProjectsComponent { }