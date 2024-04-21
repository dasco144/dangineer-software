import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import DataPage from './data.page';

describe('DataPage', () => {
  let component: DataPage;
  let fixture: ComponentFixture<DataPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DataPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
