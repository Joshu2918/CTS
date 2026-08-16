import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
    instructor: 'Dr. Rao',
    duration: '16 Weeks',
    level: 'Intermediate',
    date: '2026-08-01',
    fee: 12000
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => ({ subscribe: () => ({ unsubscribe() {} }) }),
            dispatch: () => undefined
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested', () => {
    spyOn(component.enrollRequested, 'emit');
    component.enroll();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should toggle details', () => {
    expect(component.isExpanded).toBeFalse();
    component.toggleDetails();
    expect(component.isExpanded).toBeTrue();
  });

  it('should call ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: {
        previousValue: undefined,
        currentValue: mockCourse,
        firstChange: true,
        isFirstChange: () => true
      }
    });
    expect(console.log).toHaveBeenCalled();
  });
});
