import { Route } from '@angular/router';

const appRoutes: Route[] = [
  {
    path: 'students',
    loadChildren: () => import('./students/students.routes'),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.routes'),
  },
  {
    path: 'class-cards',
    loadChildren: () => import('./class-cards/class-cards.routes'),
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.routes'),
  },
  {
    path: '**',
    redirectTo: 'students',
    pathMatch: 'full',
  },
];

export default appRoutes;
