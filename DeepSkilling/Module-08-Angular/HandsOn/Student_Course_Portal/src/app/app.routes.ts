import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { EnrollmentComponent } from './pages/enrollment/enrollment';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CourseListComponent
  },

  {
    path: 'enrollment',
    component: EnrollmentComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];