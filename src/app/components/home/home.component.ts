import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { HeaderComponent } from '../header/header.component';
import { CompanyComponent } from '../company/company.component';
import { PlacedStudentsComponent } from '../placed-students/placed-students.component';
import { StudentFeedbackComponent } from '../student-feedback/student-feedback.component';
import { CourseExploreComponent } from '../course-explore/course-explore.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent, 
    HeaderComponent, 
    CompanyComponent, 
    CourseExploreComponent,
    PlacedStudentsComponent, 
    StudentFeedbackComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
