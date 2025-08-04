import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black text-white py-8 border-t border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-gray-400">
              © 2024 Raghav Rastogi. All rights reserved.
            </p>
          </div>
          
          <div class="flex space-x-6">
            <a href="mailto:raghavrastogi1990&#64;gmail.com" 
               class="text-gray-400 hover:text-blue-400 transition-colors"
               title="Email">
              📧
            </a>
            <a href="#" 
               class="text-gray-400 hover:text-blue-400 transition-colors"
               title="LinkedIn">
              💼
            </a>
            <a href="#" 
               class="text-gray-400 hover:text-blue-400 transition-colors"
               title="GitHub">
              🔗
            </a>
          </div>
        </div>
        
        <div class="mt-4 pt-4 border-t border-gray-800 text-center">
          <p class="text-sm text-gray-500">
            Built with Angular 17 and .NET 8 • Deployed on Azure App Service
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent { }