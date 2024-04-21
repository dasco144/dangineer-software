import { ComponentFixture, TestBed } from '@angular/core/testing';

import StudentsPage from './students.page';
import { provideRouter } from '@angular/router';

describe('StudentsPage', () => {
  let component: StudentsPage;
  let fixture: ComponentFixture<StudentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsPage],
      providers: [
        provideRouter([{ path: 'students', component: StudentsPage }]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
