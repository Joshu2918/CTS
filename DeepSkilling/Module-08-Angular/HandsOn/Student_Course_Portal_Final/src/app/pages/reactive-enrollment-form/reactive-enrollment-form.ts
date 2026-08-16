import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';

function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (
    value &&
    value.toString().toUpperCase().startsWith('XX')
  ) {
    return {
      noCourseCode: true
    };
  }

  return null;
}

const simulateEmailCheck: AsyncValidatorFn = (
  control: AbstractControl
) => {

  return new Promise<ValidationErrors | null>(
    resolve => {

      setTimeout(() => {

        const value = control.value || '';

        if (
          value.toLowerCase().includes('test@')
        ) {
          resolve({
            emailTaken: true
          });
        } else {
          resolve(null);
        }

      }, 800);

    }
  );
};

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent
  implements OnInit {

  enrollForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: [
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          simulateEmailCheck
        ]
      ],

      courseId: [
        '',
        [
          Validators.required,
          noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get(
      'additionalCourses'
    ) as FormArray;
  }

  addCourse(): void {

    this.additionalCourses.push(
      new FormControl(
        '',
        Validators.required
      )
    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

  onSubmit(): void {

    if (this.enrollForm.invalid) {

      this.enrollForm.markAllAsTouched();

      return;

    }

    console.log(
      'Form value:',
      this.enrollForm.value
    );

    console.log(
      'Raw form value:',
      this.enrollForm.getRawValue()
    );

  }

}