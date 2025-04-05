import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 95, icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
        { name: 'TypeScript', level: 80, icon: 'fas fa-code' },
        { name: 'Angular', level: 80, icon: 'fab fa-angular' },
        { name: 'SASS/SCSS', level: 95, icon: 'fab fa-sass' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 60, icon: 'fab fa-node-js' },
        { name: 'MySQL', level: 70, icon: 'fas fa-database' },
        { name: 'C++', level: 75, icon: 'fas fa-code' },
        { name: '.Net', level: 60, icon: 'fas fa-code' },
      ],
    },
    {
      name: 'Tools and others',
      skills: [
        { name: 'Git', level: 80, icon: 'fab fa-git-alt' },
        { name: 'Docker', level: 70, icon: 'fab fa-docker' },
        { name: 'Figma', level: 75, icon: 'fab fa-figma' },
        { name: 'Responsive design', level: 95, icon: 'fas fa-mobile-alt' },
        { name: 'Testing', level: 75, icon: 'fas fa-vial' },
      ],
    },
  ];
}
