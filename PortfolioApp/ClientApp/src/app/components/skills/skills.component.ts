import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `<section id="skills" class="py-20"><div class="container"><h2>Technical Skills</h2></div></section>`,
  styles: []
})
export class SkillsComponent { }