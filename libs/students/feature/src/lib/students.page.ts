import { AsyncPipe } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { of } from 'rxjs';
import { StudentWithAttendanceInfo } from './interfaces';

@Component({
  selector: 'dgs-students',
  templateUrl: 'students.page.html',
  styleUrls: ['students.page.scss'],
  imports: [AsyncPipe, IonList, IonLabel, IonItem, RouterLink],
  standalone: true,
})
export default class StudentsPage {
  readonly studentById: TrackByFunction<StudentWithAttendanceInfo> = (
    _index,
    student
  ) => student.id;

  students$ = of<StudentWithAttendanceInfo[]>([
    {
      id: '1',
      name: 'John',
      surname: 'Doe',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget elit. ',
      dateAdded: new Date(),
      dateLastAttended: new Date(),
      classesAttended: 1,
      classesAvailable: 4,
    },
    {
      id: '2',
      name: 'Jane',
      surname: 'Doe',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget elit. ',
      dateAdded: new Date(),
      dateLastAttended: new Date(),
      classesAttended: 1,
      classesAvailable: 4,
    },
    {
      id: '3',
      name: 'John',
      surname: 'Smith',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget elit. ',
      dateAdded: new Date(),
      dateLastAttended: new Date(),
      classesAttended: 1,
      classesAvailable: 4,
    },
    {
      id: '4',
      name: 'Jane',
      surname: 'Smith',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eget elit. ',
      dateAdded: new Date(),
      dateLastAttended: new Date(),
      classesAttended: 1,
      classesAvailable: 4,
    },
  ]);
}
