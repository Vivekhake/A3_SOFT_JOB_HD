import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placed-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placed-students.component.html',
  styleUrls: ['./placed-students.component.css']
})
export class PlacedStudentsComponent {
  students = [
    { name: 'Rahul Sharma', company: 'Google', role: 'Software Engineer', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Priya Patel', company: 'Microsoft', role: 'Frontend Developer', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Amit Kumar', company: 'Amazon', role: 'Backend Engineer', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { name: 'Neha Singh', company: 'TCS', role: 'Data Analyst', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Vikram Mehta', company: 'Infosys', role: 'Full Stack Developer', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Sneha Reddy', company: 'Wipro', role: 'UI/UX Designer', image: 'https://randomuser.me/api/portraits/women/28.jpg' }
  ];
}
