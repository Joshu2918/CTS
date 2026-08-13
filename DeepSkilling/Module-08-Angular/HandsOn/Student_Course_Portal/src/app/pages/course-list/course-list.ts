import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseLevelPipe } from '../../shared/course-level-pipe';
import { HighlightDirective } from '../../shared/highlight';

@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    CourseLevelPipe,
    HighlightDirective
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  courses = [
    {
      id: 1,
      name: 'Angular',
      instructor: 'John Smith',
      duration: 3,
      level: 'Intermediate',
      available: true
    },
    {
      id: 2,
      name: 'Java',
      instructor: 'David Kumar',
      duration: 4,
      level: 'Beginner',
      available: true
    },
    {
      id: 3,
      name: 'SQL',
      instructor: 'Priya Sharma',
      duration: 2,
      level: 'Intermediate',
      available: true
    },
    {
      id: 4,
      name: 'C#',
      instructor: 'Robert Wilson',
      duration: 3,
      level: 'Advanced',
      available: false
    },
    {
      id: 5,
      name: 'ASP.NET Core',
      instructor: 'Michael Brown',
      duration: 5,
      level: 'Advanced',
      available: true
    },
    {
      id: 6,
      name: 'Python',
      instructor: 'Anita Rao',
      duration: 3,
      level: 'Beginner',
      available: true
    }
  ];

}