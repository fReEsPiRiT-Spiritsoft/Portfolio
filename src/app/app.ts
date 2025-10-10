import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './shared/header/header';
import { MainContent } from './main-content/main-content';
import { Footer } from './shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, MainContent, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private router = inject(Router);
  private translate = inject(TranslateService);
  showMainLayout = true;

  constructor() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.use(savedLang);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showMainLayout = event.url === '/' || event.url === '';
      window.scrollTo(0, 0);
    });
  }
}