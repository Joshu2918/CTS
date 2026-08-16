import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';
import { catchError, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html'
})
export class CourseDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly courseService = inject(CourseService);
  private readonly enrollmentService = inject(EnrollmentService);

  course?: Course;
  errorMessage = '';
  enrolledStudentIds: number[] = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isFinite(id)) {
      this.errorMessage = 'Invalid course ID.';
      return;
    }

    this.courseService.getCourseById(id).pipe(
      switchMap(course =>
        this.enrollmentService.getStudentsByCourse(course.id).pipe(
          map(studentIds => {
            this.enrolledStudentIds = studentIds;
            return course;
          })
        )
      ),
      catchError(() => {
        this.errorMessage = 'Course not found.';
        return of(undefined);
      })
    ).subscribe(course => {
      this.course = course;
    });
  }
}
