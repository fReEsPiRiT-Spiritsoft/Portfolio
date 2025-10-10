import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  scrollToContact() {
    const headerHeight = 100;
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
