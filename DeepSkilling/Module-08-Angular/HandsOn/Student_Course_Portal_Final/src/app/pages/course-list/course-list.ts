import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';
import { debounceTime, distinctUntilChanged, map, combineLatest } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly courses$ = this.store.select(selectAllCourses);
  readonly isLoading$ = this.store.select(selectCoursesLoading);
  readonly error$ = this.store.select(selectCoursesError);
  readonly filteredCourses$ = combineLatest([
    this.courses$,
    this.route.queryParamMap
  ]).pipe(
    map(([courses, queryParamMap]) => {
      const searchTerm = queryParamMap.get('search')?.toLowerCase() || '';
      if (!searchTerm) {
        return courses;
      }
      return courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm) ||
        course.code.toLowerCase().includes(searchTerm)
      );
    })
  );

  searchTerm = '';
  selectedCourseId: number | null = null;

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  onSearch(): void {
    void this.router.navigate(['/courses'], {
      queryParams: {
        search: this.searchTerm || null
      }
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    console.log('Enrolling in course: ' + courseId);
  }

  openCourse(courseId: number): void {
    void this.router.navigate(['/courses', courseId]);
  }
}
