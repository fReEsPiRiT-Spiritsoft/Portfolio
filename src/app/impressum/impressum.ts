import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslatePipe, Header, Footer],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss'
})
export class Impressum {}