import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{

  selectedCourse: Course;
  courseId: number;

  courseServcie: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    this.selectedCourse = this.courseServcie.courses.find(course=>course.id === this.courseId);
  }

}
