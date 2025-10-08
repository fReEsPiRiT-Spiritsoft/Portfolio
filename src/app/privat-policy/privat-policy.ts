import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-privat-policy',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, Header, Footer],
  templateUrl: './privat-policy.html',
  styleUrl: './privat-policy.scss'
})
export class PrivatPolicy {}