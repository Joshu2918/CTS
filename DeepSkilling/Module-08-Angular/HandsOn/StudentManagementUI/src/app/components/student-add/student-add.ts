import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css'
})
export class StudentAdd {

  student: Student = {
    id: 0,
    name: '',
    age: 0,
    department: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  saveStudent() {

    this.studentService.addStudent(this.student).subscribe({

      next: () => {

        alert('Student Added Successfully');

        this.router.navigate(['/students']);

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

}