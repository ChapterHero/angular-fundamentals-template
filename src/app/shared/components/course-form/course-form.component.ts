import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  submitted = false;

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  courseForm: FormGroup = this.fb.group({
    title: ['', [Validators.minLength(2), Validators.required]],
    description: ['', [Validators.minLength(2), Validators.required]],
    author: ['', [Validators.pattern('^[a-zA-Z0-9 ]+$')]],
    authors: this.fb.array([]),
    courseAuthors: this.fb.array([]),
    duration: [[], [Validators.min(0), Validators.required]]
  });

  createAuthor(): void {
    const authorControl = this.courseForm.get('author');
    if(authorControl && authorControl.value) {
      this.authors.push(new FormControl(authorControl.value));
      authorControl.reset();
    }
  }

  deleteAuthor(index: number): void {
    this.authors.removeAt(index);
  }

  addAuthor(value: any, i: number) {
    const courseAuthorControl = this.courseForm.get('courseAuthors') as FormArray;
    if(courseAuthorControl && !courseAuthorControl.controls.some(control => control.value === value)) {
      this.courseAuthors.push(new FormControl(value));
      this.authors.removeAt(i);
    }
  }

  deleteCourseAuthor(index: number) {
    this.authors.push(new FormControl(this.courseAuthors.at(index).value));
    this.courseAuthors.removeAt(index);
  }


  onSubmit() {
    if(this.courseForm.valid) {
      this.submitted = !this.submitted;
    }
  }
  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }
  get courseAuthors() {
    return this.courseForm.get('courseAuthors') as FormArray;
  }
}
//EpamLearningProjectsSpec\Main_V2\angular-fundamentals-template\src\app\shared\directives
// ng g d --skip-tests=true shared/directives/toggle-password 
