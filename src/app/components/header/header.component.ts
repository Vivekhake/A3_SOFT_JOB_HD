import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Programming Languages',
    'Game Development',
    'Database Design & Development'
  ];
}
