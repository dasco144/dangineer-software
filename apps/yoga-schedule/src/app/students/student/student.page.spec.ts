import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import StudentPage from './student.page';
import { provideRouter } from '@angular/router';

describe('StudentPage', () => {
  let component: StudentPage;
  let fixture: ComponentFixture<StudentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StudentPage],
      providers: [
        provideRouter([
          { path: 'students/:studentId', component: StudentPage },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
