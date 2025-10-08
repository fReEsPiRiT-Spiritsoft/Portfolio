import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  http = inject(HttpClient);

  name = '';
  email = '';
  message = '';
  privacyChecked = false;

  nameValid: boolean | null = null;
  emailValid: boolean | null = null;
  messageValid: boolean | null = null;

  isSending = false;
  sendSuccess = false;
  sendError = false;

  validateName() {
    this.nameValid = !!this.name.trim();
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValid = !!this.email.trim() && emailRegex.test(this.email);
  }

  validateMessage() {
    this.messageValid = !!this.message.trim();
  }

  onSubmit() {
    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (this.nameValid && this.emailValid && this.messageValid && this.privacyChecked) {
      this.isSending = true;
      this.sendSuccess = false;
      this.sendError = false;

      const formData = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      this.http.post('https://formspree.io/f/xyznddkd', formData)
        .subscribe({
          next: (response) => {
            this.sendSuccess = true;
            
            this.name = '';
            this.email = '';
            this.message = '';
            this.nameValid = null;
            this.emailValid = null;
            this.messageValid = null;
            this.privacyChecked = false;

            setTimeout(() => {
              this.sendSuccess = false;
            }, 5000);
          },
          error: (error) => {
            this.sendError = true;
            setTimeout(() => {
              this.sendError = false;
            }, 5000);
          },
          complete: () => {
            this.isSending = false;
          }
        });
    }
  }
}