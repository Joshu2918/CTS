import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, forkJoin } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from './course';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly http = inject(HttpClient);
  private readonly courseService = inject(CourseService);
  private readonly enrollmentUrl = 'http://localhost:3000/enrollments';

  enroll(courseId: number, studentId = 1): Observable<unknown> {
    return this.http.post(this.enrollmentUrl, { studentId, courseId });
  }

  unenroll(enrollmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.enrollmentUrl}/${enrollmentId}`);
  }

  getEnrolledCourses(studentId = 1): Observable<Course[]> {
    return this.http.get<{ courseId: number }[]>(
      `${this.enrollmentUrl}?studentId=${studentId}`
    ).pipe(
      switchMap(enrollments => {
        if (!enrollments.length) {
          return [ [] as Course[] ];
        }

        return forkJoin(
          enrollments.map(item => this.courseService.getCourseById(item.courseId))
        );
      })
    );
  }

  getStudentsByCourse(courseId: number): Observable<number[]> {
    return this.http.get<{ studentId: number }[]>(
      `${this.enrollmentUrl}?courseId=${courseId}`
    ).pipe(
      map(enrollments => enrollments.map(item => item.studentId))
    );
  }
}
