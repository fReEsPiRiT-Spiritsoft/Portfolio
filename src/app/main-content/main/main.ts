import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  scrollToContact() {
    const headerHeight = 100; // Passe diesen Wert an die Höhe deines Headers an!
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      const topElement = document.getElementById('contact');
      if (topElement) {
        const y = topElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
}