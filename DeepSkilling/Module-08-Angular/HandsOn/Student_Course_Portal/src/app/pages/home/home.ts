import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  @Input() portalName = 'Student Course Portal';

  studentName = 'Joshu';

  courseCount = 12;
  enrolledCount = 3;
  gpa = 3.8;

  isPortalActive = true;

  message = '';

  ngOnInit() {
    console.log('Home component initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input value changed:', changes);
  }

  enroll() {
    this.message = 'Enrollment successful!';
  }

  ngOnDestroy() {
    console.log('Home component destroyed');
  }
}