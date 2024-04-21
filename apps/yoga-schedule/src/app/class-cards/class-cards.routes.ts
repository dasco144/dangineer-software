import { Routes } from '@angular/router';

const classCardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./class-cards.page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default classCardRoutes;
