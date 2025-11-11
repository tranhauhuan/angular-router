import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{

  selectedCourse: Course;
  courseId: number;

  courseServcie: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(): void {
   this.paramMapObs = this.activeRoute.paramMap.subscribe((data)=>{
    this.courseId = +data.get('id');
    this.selectedCourse = this.courseServcie.courses.find(course=>course.id===this.courseId)
   })
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe()
  }

}
