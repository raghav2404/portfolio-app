import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div class="section-divider mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="contact-info">
            <div class="bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-6 text-white">Contact Information</h3>
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl">📧</span>
                <div>
                  <p class="font-semibold text-gray-300">Email</p>
                  <a href="mailto:raghavrastogi1990&#64;gmail.com" class="text-blue-400 hover:text-blue-300">
                    raghavrastogi1990&#64;gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <div class="bg-gray-800 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-6 text-white">Send Message</h3>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      id="name" 
                      formControlName="name" 
                      type="text" 
                      placeholder="Your Name"
                      class="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      id="email" 
                      formControlName="email" 
                      type="email" 
                      placeholder="your.email&#64;example.com"
                      class="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    id="subject" 
                    formControlName="subject" 
                    type="text" 
                    placeholder="Subject"
                    class="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    formControlName="message" 
                    rows="5" 
                    placeholder="Your message..."
                    class="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid || isSubmitting" 
                  class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
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
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      console.log('Contact form submitted:', this.contactForm.value);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Message sent successfully');
        this.contactForm.reset();
        this.isSubmitting = false;
      }, 2000);
    }
  }
}