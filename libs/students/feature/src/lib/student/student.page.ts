import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { StudentWithAttendanceInfo } from '../interfaces';

@Component({
  selector: 'dgs-student',
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
