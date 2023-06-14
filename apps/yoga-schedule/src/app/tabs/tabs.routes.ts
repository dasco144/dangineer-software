import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const tabRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page'),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/students',
    pathMatch: 'full',
  },
];

export default tabRoutes;
