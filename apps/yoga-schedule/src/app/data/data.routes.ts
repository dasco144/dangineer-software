import { Routes } from '@angular/router';

const dataRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./data.page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default dataRoutes;
