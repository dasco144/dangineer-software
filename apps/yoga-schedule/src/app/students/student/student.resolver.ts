import { ResolveFn } from '@angular/router';
import { StudentWithAttendanceInfo } from '../students.page';
import { of } from 'rxjs';

export const studentResolver: ResolveFn<StudentWithAttendanceInfo> = (
  _snapshot,
  _routerSnapshot
) => {
  return of<StudentWithAttendanceInfo>({
    id: '2',
    name: 'Jane',
    surname: 'Doe',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget elit. ',
    dateAdded: new Date(),
    dateLastAttended: new Date(),
    classesAttended: 1,
    classesAvailable: 4,
  });
};
