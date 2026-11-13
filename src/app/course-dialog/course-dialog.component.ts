import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-dialog',
  //standalone: true,
  //imports: [],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css'
})
export class CourseDialogComponent implements AfterViewInit{
  //form: FormGroup;
  //course:Course;

 // @ViewChild('saveButton') saveButton: ElementRef;
  constructor(){}
  /*
  constructor(
      private fb: FormBuilder,
     // private dialogRef: MatDialogRef<CourseDialogComponent>,
      @Inject(MAT_DIALOG_DATA) course:Course) {

      this.course = course;

      this.form = fb.group({
          description: [course.description, 
                        Validators.required],
          category: [course.category, Validators.required],
          releasedAt: [moment(), Validators.required],
          longDescription: [course.longDescription,
                            Validators.required]
      });
  }
 */
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
