import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllCourses } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly courses$ = this.store.select(selectAllCourses);
  readonly enrolledIds$ = this.store.select(selectEnrolledIds);

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  gpa = 8.1;

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    console.log('HomeComponent initialised — courses loaded');
  }

  onEnrollClick(): void {
    // Navigate to the enrollment page
    this.router.navigate(['/enroll']);
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
