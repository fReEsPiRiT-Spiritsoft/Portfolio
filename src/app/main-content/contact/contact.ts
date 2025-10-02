import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  message = '';

  // Drei Zustände: null = unberührt, true = gültig, false = ungültig
  nameValid: boolean | null = null;
  emailValid: boolean | null = null;
  messageValid: boolean | null = null;

  validateName() {
    this.nameValid = !!this.name.trim();
  }

  validateEmail() {
    this.emailValid = !!this.email.trim() && this.email.includes('@');
  }

  validateMessage() {
    this.messageValid = !!this.message.trim();
  }

  onSubmit() {
    // Validierung erzwingen (setzt false wenn leer)
    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (this.nameValid && this.emailValid && this.messageValid) {
      alert('Message sent successfully!');
      // Form zurücksetzen
      this.name = '';
      this.email = '';
      this.message = '';
      this.nameValid = null;
      this.emailValid = null;
      this.messageValid = null;
    }
    // Bei ungültigen Feldern passiert nichts - Fehler werden angezeigt
  }
}

