import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentEntryComponent } from './create-student-entry.component';

describe('CreateStudentEntryComponent', () => {
  let component: CreateStudentEntryComponent;
  let fixture: ComponentFixture<CreateStudentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
