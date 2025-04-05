import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Dashboard de Analítica',
      description:
        'Aplicación de dashboard para visualización de datos de analítica con gráficos interactivos y filtros avanzados.',
      image: 'assets/images/projects/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Chart.js', 'SCSS'],
      demoUrl: 'https://demo.example.com/project1',
      repoUrl: 'https://github.com/yourusername/analytics-dashboard',
      featured: true,
    },
    {
      id: 2,
      title: 'Plataforma E-learning',
      description:
        'Plataforma de cursos online con sistema de gestión de contenido, progreso de estudiantes y evaluaciones.',
      image: 'assets/images/projects/project2.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      demoUrl: 'https://demo.example.com/project2',
      repoUrl: 'https://github.com/yourusername/elearning-platform',
    },
    {
      id: 3,
      title: 'App de Gestión de Tareas',
      description:
        'Aplicación para la gestión de tareas con funcionalidades de organización, recordatorios y colaboración en equipo.',
      image: 'assets/images/projects/project3.jpg',
      technologies: ['Angular', 'Firebase', 'RxJS', 'NgRx'],
      demoUrl: 'https://demo.example.com/project3',
      repoUrl: 'https://github.com/yourusername/task-management-app',
      featured: true,
    },
    {
      id: 4,
      title: 'Catálogo de Productos',
      description:
        'Catálogo digital con sistema de búsqueda, filtrado y carrito de compras para una tienda online.',
      image: 'assets/images/projects/project4.jpg',
      technologies: ['Angular', 'REST API', 'SCSS', 'Bootstrap'],
      demoUrl: 'https://demo.example.com/project4',
      repoUrl: 'https://github.com/yourusername/product-catalog',
    },
    {
      id: 5,
      title: 'Portfolio Personal',
      description:
        'Website de portfolio personal desarrollado con Angular utilizando componentes standalone.',
      image: 'assets/images/projects/project5.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Standalone Components'],
      demoUrl: 'https://yourportfolio.com',
      repoUrl: 'https://github.com/yourusername/personal-portfolio',
      featured: true,
    },
    {
      id: 6,
      title: 'Aplicación de Clima',
      description:
        'Aplicación de pronóstico del tiempo que muestra información meteorológica en tiempo real y previsiones.',
      image: 'assets/images/projects/project6.jpg',
      technologies: ['Angular', 'OpenWeather API', 'RxJS', 'SCSS'],
      demoUrl: 'https://demo.example.com/project6',
      repoUrl: 'https://github.com/yourusername/weather-app',
    },
  ];

  activeFilter: string = 'all';

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'featured') {
      return this.projects.filter((project) => project.featured);
    }
    return this.projects;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}
