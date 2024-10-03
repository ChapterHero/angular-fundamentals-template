import { Component, Input } from '@angular/core';
import { mockedCoursesList } from '@app/shared/mocks/mock';
import { Course } from '@app/shared/model/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  @Input() courses:Course[] = mockedCoursesList;
  @Input() editable!: boolean;

  onDeleteCourse() {
    console.log("deleted");
  }
  onEditCourse() {
    console.log("edited");
  }
  onShowCourse(course: Course) {
    console.log("show: " + course); /* Probably lead to course info, routing */
  }
  /* TODO: course model as type */
}
