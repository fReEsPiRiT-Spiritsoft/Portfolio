import { Component } from '@angular/core';
import { Main } from './main/main';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-main-content',
  imports: [Main, AboutMe, Skills, Portfolio, References, Contact ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
