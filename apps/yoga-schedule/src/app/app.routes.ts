import { Route } from '@angular/router';

const appRoutes: Route[] = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes'),
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

export default appRoutes;
