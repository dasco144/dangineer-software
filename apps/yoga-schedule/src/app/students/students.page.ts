import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'dangineer-software-students',
  templateUrl: 'students.page.html',
  styleUrls: ['students.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export default class StudentsPage {
  constructor() {}
}
