import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;

  submitted = false;
  message = '';

  onSubmit(form: NgForm): void {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    this.submitted = true;
    this.message = 'Enrollment request submitted successfully!';

  }

  resetForm(form: NgForm): void {

    form.resetForm();

    this.studentName = '';
    this.studentEmail = '';
    this.courseId = null;
    this.preferredSemester = '';
    this.agreeToTerms = false;

    this.submitted = false;
    this.message = '';

  }
}