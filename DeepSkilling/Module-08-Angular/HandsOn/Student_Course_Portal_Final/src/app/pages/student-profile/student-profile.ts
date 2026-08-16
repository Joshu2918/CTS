import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent implements OnInit {
  private readonly store = inject(Store);
  readonly enrolledCourses$ = this.store.select(selectEnrolledCourses);

  // Student profile properties
  studentName = 'Student';
  studentEmail = 'student@example.com';
  isEditMode = false;

  ngOnInit(): void {
    // Load student details from localStorage if available
    const savedName = localStorage.getItem('studentName');
    const savedEmail = localStorage.getItem('studentEmail');

    if (savedName) {
      this.studentName = savedName;
    }
    if (savedEmail) {
      this.studentEmail = savedEmail;
    }
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveStudentDetails(): void {
    // Save to localStorage
    localStorage.setItem('studentName', this.studentName);
    localStorage.setItem('studentEmail', this.studentEmail);

    // Exit edit mode
    this.isEditMode = false;

    // Optional: Show a success message
    alert('Student details saved successfully!');
  }

  cancelEdit(): void {
    // Reload from localStorage to discard changes
    const savedName = localStorage.getItem('studentName');
    const savedEmail = localStorage.getItem('studentEmail');

    if (savedName) {
      this.studentName = savedName;
    }
    if (savedEmail) {
      this.studentEmail = savedEmail;
    }

    this.isEditMode = false;
  }
}
