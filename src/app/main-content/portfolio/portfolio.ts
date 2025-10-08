import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  projects = [
  {
    titleKey: 'PORTFOLIO.PROJECTS.POLLO_TITLE',
    descKey: 'PORTFOLIO.PROJECTS.POLLO_DESC',
    image: 'assets/img/polo-loco.png',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://patrick-schmidt.info/polo/',
    codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/polo-loco'
  },
  {
    titleKey: 'PORTFOLIO.PROJECTS.POKEDEX_TITLE',
    descKey: 'PORTFOLIO.PROJECTS.POKEDEX_DESC',
    image: 'assets/img/pokex-laptop.png',
    tech: ['JavaScript', 'CSS', 'REST API'],
    liveUrl: 'https://patrick-schmidt.developerakademie.net/pokedex/',
    codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/pokedex'
  },
  {
    titleKey: 'PORTFOLIO.PROJECTS.WINDOWS_TITLE',
    descKey: 'PORTFOLIO.PROJECTS.WINDOWS_DESC',
    image: 'assets/img/windows-laptop.png',
    tech: ['JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://patrick-schmidt.info/windows',
    codeUrl: 'https://github.com/fReEsPiRiT-Spiritsoft/Website-im-Windows-Style'
  }
];

  isMobile(): boolean {
    return window.innerWidth < 600;
  }

  onCardClick(project: any): void {
    if (this.isMobile()) {
      window.open(project.liveUrl, '_blank');
    }
  }
}
  
