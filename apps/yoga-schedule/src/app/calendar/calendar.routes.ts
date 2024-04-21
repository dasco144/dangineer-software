import { Routes } from '@angular/router';

const calendarRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./calendar.page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default calendarRoutes;
