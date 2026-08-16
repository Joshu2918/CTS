import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, retry, switchMap, tap } from 'rxjs';
import { CourseService } from '../../services/course';
import {
  loadCourses,
  loadCoursesFailure,
  loadCoursesSuccess
} from './course.actions';

@Injectable()
export class CourseEffects {
  private readonly actions$ = inject(Actions);
  private readonly courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        this.courseService.getCourses().pipe(
          retry(2),
          tap(courses => console.log('Courses loaded:', courses.length)),
          map(courses => courses.filter(course => course.credits > 0)),
          map(courses => loadCoursesSuccess({ courses })),
          catchError(error =>
            of(loadCoursesFailure({
              error: error?.message ?? 'Failed to load courses. Please try again.'
            }))
          )
        )
      )
    )
  );
}
