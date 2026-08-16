import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  private readonly store = inject(Store);

  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  @Output() courseSelected = new EventEmitter<number>();

  readonly enrolledIds$ = this.store.select(selectEnrolledIds);
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  enroll(): void {
    if (this.course.enrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      this.course = { ...this.course, enrolled: false };
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.course = { ...this.course, enrolled: true };
    }

    this.enrollRequested.emit(this.course.id);
  }

  openCourse(): void {
    this.courseSelected.emit(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get gradeBorderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }
}
