import { Routes } from '@angular/router';
import { studentResolver } from './student/student.resolver';

const studentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./students.page'),
  },
  {
    path: ':studentId',
    loadComponent: () => import('./student/student.page'),
    resolve: { student: studentResolver },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default studentRoutes;
