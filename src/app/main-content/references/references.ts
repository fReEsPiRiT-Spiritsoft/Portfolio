import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  currentIndex = 0;

  references = [
    {
      text: "Wer mit Patrick arbeitet, merkt sofort sein Interesse am Programmieren. Er testet, hinterfragt und bringt dadurch frischen Input in jedes Projekt.",
      author: "S. Heinze",
      role: "Team Partner",
      image: "assets/img/s-heinze-min.png"
    },
    {
      text: "Outstanding developer with excellent problem-solving skills. Always delivers high-quality code on time.",
      author: "A. Mueller",
      role: "Project Manager",
      image: "assets/img/placeholder-male.jpg"
    },
    {
      text: "Great team player who brings innovative solutions to complex challenges. Highly recommended!",
      author: "S. Weber",
      role: "Lead Developer",
      image: "assets/img/placeholder-male.jpg"
    },
    {
      text: "Professional, reliable, and always willing to go the extra mile. A pleasure to work with.",
      author: "M. Fischer",
      role: "Client",
      image: "assets/img/placeholder-male.jpg"
    }
  ];

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  previousReference() {
    this.currentIndex = this.currentIndex === 0 
      ? this.references.length - 1 
      : this.currentIndex - 1;
  }

  goToReference(index: number) {
    this.currentIndex = index;
  }
}