import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { StudentWithAttendanceInfo } from '../students.page';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'dangineer-software-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  imports: [AsyncPipe, JsonPipe],
  standalone: true,
})
export default class StudentPage {
  student$ = this.activatedRoute.data.pipe(
    map(({ student }) => student),
    filter((student): student is StudentWithAttendanceInfo => student)
  );

  constructor(private activatedRoute: ActivatedRoute) {}
}
