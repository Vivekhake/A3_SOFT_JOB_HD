import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  feedbacks = [
    { 
      name: 'Anjali Desai', 
      course: 'Full Stack Web Development', 
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      text: 'A3 Soft Solution completely transformed my career. The mentors are highly experienced, and the placement support is phenomenal. I landed my dream job within a month of course completion!'
    },
    { 
      name: 'Rohan Gupta', 
      course: 'Data Science & ML', 
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      rating: 5,
      text: 'The practical approach to learning and real-world projects helped me understand complex concepts easily. The institute genuinely cares about student success. Highly recommended!'
    },
    { 
      name: 'Kavita Joshi', 
      course: 'UI/UX Design', 
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      rating: 5,
      text: 'From day one, the focus was on building a strong portfolio. The mock interviews and resume building sessions were the key to my successful placement. Thank you A3 Soft Solution!'
    }
  ];

  getStars(rating: number) {
    return Array(rating).fill(0);
  }
}
