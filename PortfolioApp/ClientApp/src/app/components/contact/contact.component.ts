import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 bg-secondary">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info">
            <div class="card">
              <h3 class="text-xl font-bold mb-6">Contact Information</h3>
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <div>
                  <p class="font-semibold">Email</p>
                  <a href="mailto:raghavrastogi1990@gmail.com" class="text-accent-blue">
                    raghavrastogi1990@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <div class="card">
              <h3 class="text-xl font-bold mb-6">Send Message</h3>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" formControlName="name" type="text" placeholder="Your Name" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" formControlName="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input id="subject" formControlName="subject" type="text" placeholder="Subject" />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" formControlName="message" rows="5" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="btn btn-primary w-full">
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
    .bg-secondary { background-color: var(--bg-secondary); }
    .text-accent-blue { color: var(--accent-blue); }
    .section-divider {
      width: 6rem;
      height: 4px;
      background: var(--gradient-primary);
      margin: 0 auto;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .contact-icon {
      font-size: 1.5rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .w-full { width: 100%; }
    @media (min-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
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
      this.contactService.sendContactMessage(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Message sent successfully', response);
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Error sending message', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}