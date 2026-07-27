import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  title = 'Student Management System';

  studentName = '';

  students = [
    { id: 1, name: 'Rahul', age: 21, department: 'Computer Science' },
    { id: 2, name: 'Priya', age: 22, department: 'Information Technology' },
    { id: 3, name: 'Arjun', age: 20, department: 'Electronics' }
  ];

  showMessage() {
    alert('Welcome to Angular!');
  }

  addStudent() {
    if (this.studentName.trim()) {
      this.students.push({
        id: this.students.length + 1,
        name: this.studentName,
        age: 20,
        department: 'New Department'
      });

      this.studentName = '';
    }
  }
}