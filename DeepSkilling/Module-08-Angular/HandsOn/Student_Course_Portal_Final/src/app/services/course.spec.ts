import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    {
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
    },
    {
      id: 2,
      name: 'DBMS',
      code: 'CS102',
      credits: 4,
      gradeStatus: 'pending',
      instructor: 'Dr. Kumar',
      duration: '16 Weeks',
      level: 'Intermediate',
      date: '2026-08-05',
      fee: 14000
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get courses', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
    });

    const request = httpMock.expectOne('http://localhost:3000/courses');
    expect(request.request.method).toBe('GET');
    request.flush(mockCourses);
  });

  it('should handle server error', () => {
    service.getCourses().subscribe({
      next: () => fail('Expected an error'),
      error: error => {
        expect(error.status).toBe(500);
      }
    });

    const request = httpMock.expectOne('http://localhost:3000/courses');
    request.flush('Server error', {
      status: 500,
      statusText: 'Server Error'
    });
  });
});
