import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {

    this.studentService.getStudents().subscribe({

      next: (data) => {

        this.students = data;

      },

      error: (err) => console.log(err)

    });

  }

  deleteStudent(id: number): void {

    if (confirm('Are you sure you want to delete this student?')) {

      this.studentService.deleteStudent(id).subscribe({

        next: () => {

          alert('Student Deleted Successfully');

          this.loadStudents();

        },

        error: (err) => console.log(err)

      });

    }

  }

}