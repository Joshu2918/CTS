import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class CoursesComponent {

  courses = [
    {
      id: 1,
      name: 'Angular',
      duration: '3 Months',
      level: 'Intermediate',
      enrolled: false
    },
    {
      id: 2,
      name: 'Java',
      duration: '4 Months',
      level: 'Beginner',
      enrolled: false
    },
    {
      id: 3,
      name: 'SQL',
      duration: '2 Months',
      level: 'Intermediate',
      enrolled: false
    },
    {
      id: 4,
      name: 'C#',
      duration: '3 Months',
      level: 'Beginner',
      enrolled: false
    }
  ];

  enroll(course: any) {
    course.enrolled = true;
  }

}