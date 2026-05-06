import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-explore.component.html',
  styleUrls: ['./course-explore.component.css']
})
export class CourseExploreComponent {
  courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master frontend and backend technologies including Angular, Node.js, and MongoDB.',
      duration: '6 Months',
      nextBatch: '15th June 2026',
      mode: 'Online / Offline',
      icon: '🌐',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      description: 'Learn Python, Data Analysis, Machine Learning algorithms, and Deep Learning concepts.',
      duration: '8 Months',
      nextBatch: '20th June 2026',
      mode: 'Online',
      icon: '📊',
      color: 'purple'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Design intuitive and beautiful user interfaces with Figma, Adobe XD, and user research.',
      duration: '4 Months',
      nextBatch: '10th July 2026',
      mode: 'Online / Offline',
      icon: '🎨',
      color: 'pink'
    },
    {
      id: 4,
      title: 'Java Full Stack Development',
      description: 'Build enterprise applications using Core Java, Spring Boot, Hibernate, and Angular.',
      duration: '6 Months',
      nextBatch: '5th July 2026',
      mode: 'Online',
      icon: '☕',
      color: 'orange'
    },
    {
      id: 5,
      title: 'Software Testing & QA',
      description: 'Learn Manual Testing, Automation Testing with Selenium, API Testing and CI/CD.',
      duration: '3 Months',
      nextBatch: '1st August 2026',
      mode: 'Online / Offline',
      icon: '✅',
      color: 'green'
    },
    {
      id: 6,
      title: 'Cloud Computing & DevOps',
      description: 'Master AWS, Docker, Kubernetes, Jenkins, and modern deployment pipelines.',
      duration: '5 Months',
      nextBatch: '12th August 2026',
      mode: 'Online',
      icon: '☁️',
      color: 'teal'
    }
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    // Calculate exact scroll amount dynamically based on card size + gap
    const firstCard = container.querySelector('.course-card');
    const scrollAmount = firstCard ? firstCard.offsetWidth + 30 : 400;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
