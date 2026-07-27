import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../../models/student';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css'
})
export class StudentEdit implements OnInit {

  student: Student = {
    id: 0,
    name: '',
    age: 0,
    department: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudent(id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => console.log(err)
    });

  }

  updateStudent() {

    this.studentService.updateStudent(this.student.id, this.student).subscribe({

      next: () => {

        alert('Student Updated Successfully');

        this.router.navigate(['/students']);

      },

      error: (err) => console.log(err)

    });

  }

}