import { Routes } from '@angular/router';
import { PrivatPolicy } from '../app/privat-policy/privat-policy';
import { MainContent } from './main-content/main-content';
import { Impressum } from '../app/impressum/impressum';

export const routes: Routes = [
    // { path: '', component: MainContent }, // Hauptseite
    { path: 'privacy', component: PrivatPolicy },
    { path: 'impressum', component: Impressum },
    { path: '**', redirectTo: '' }
];
