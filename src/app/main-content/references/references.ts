import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  currentIndex = 0;

  references = [
    {
      textKey: 'REFERENCES.HEINZE.TEXT',
      authorKey: 'REFERENCES.HEINZE.AUTHOR',
      roleKey: 'REFERENCES.HEINZE.ROLE',
      image: 'assets/img/s-heinze-min.png'
    },
    {
      textKey: 'REFERENCES.LUZIUS.TEXT',
      authorKey: 'REFERENCES.LUZIUS.AUTHOR',
      roleKey: 'REFERENCES.LUZIUS.ROLE',
      image: 'assets/img/daniel_img.jpg'
    },
    {
      textKey: 'REFERENCES.KAJA.TEXT',
      authorKey: 'REFERENCES.KAJA.AUTHOR',
      roleKey: 'REFERENCES.KAJA.ROLE',
      image: 'assets/img/placeholder-male.jpg'
    },
    {
      textKey: 'REFERENCES.FISCHER.TEXT',
      authorKey: 'REFERENCES.FISCHER.AUTHOR',
      roleKey: 'REFERENCES.FISCHER.ROLE',
      image: 'assets/img/placeholder-male.jpg'
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