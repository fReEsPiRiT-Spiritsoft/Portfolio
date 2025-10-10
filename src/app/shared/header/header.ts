import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

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
    const savedLang = localStorage.getItem('language') || 'en';
    this.currentLang = savedLang;
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('language', lang);
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
    const scrollWithOffset = (id: string, offset: number) => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    const headerHeight = 100;
    if (this.isPrivacyPage()) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          scrollWithOffset(section, headerHeight);
        }, 100);
      });
    } else {
      scrollWithOffset(section, headerHeight);
    }
  }
}