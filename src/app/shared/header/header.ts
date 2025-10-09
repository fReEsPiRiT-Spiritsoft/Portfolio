import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  translate = inject(TranslateService);
  router = inject(Router);
  menuOpen = false;
  currentLang = 'en';

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.closeMenu();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  isPrivacyPage(): boolean {
    return this.router.url.includes('/privacy') || this.router.url.includes('/impressum');
  }

  navigateToSection(section: string) {
    this.closeMenu();

    if (this.isPrivacyPage()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}