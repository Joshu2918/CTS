import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './course-summary-widget.html',
  styleUrls: ['./course-summary-widget.css']
})
export class CourseSummaryWidgetComponent {
  private readonly store = inject(Store);
  readonly courses$ = this.store.select(selectAllCourses);
}