import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const tabRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'students',
        loadComponent: () => import('../students/students.page'),
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
