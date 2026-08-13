import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  imports: [FormsModule],
  templateUrl: './enrollment.html',
  styleUrl: './enrollment.css'
})
export class EnrollmentComponent {

  studentName = '';
  email = '';
  course = '';
  phone = '';

  submitted = false;
  message = '';

  courses = [
    'Angular',
    'Java',
    'SQL',
    'C#',
    'ASP.NET Core',
    'Python'
  ];

  enroll() {
    this.submitted = true;
    this.message = 'Enrollment submitted successfully!';
  }

}