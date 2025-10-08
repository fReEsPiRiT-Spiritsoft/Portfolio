import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {}