import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import ClassCardPage from './class-cards.page';

describe('ClassCardPage', () => {
  let component: ClassCardPage;
  let fixture: ComponentFixture<ClassCardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ClassCardPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
