import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
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
      title: 'GIF search app',
      description:
        'GIF search application that allows users to search and view GIFs from the Giphy API.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'RestAPI'],
      repoUrl: 'https://github.com/cristian-gl-wd/gif-searcher',
    },
    {
      id: 2,
      title: 'Country information search app',
      description:
        'Discover countries you never learned about in school! Concise info (size, pop., capital) to broaden your world view.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'RestAPI', 'PrimeNG'],
      repoUrl: 'https://github.com/cristian-gl-wd/country-app',
      featured: true,
    },
    {
      id: 3,
      title: 'Superhero app',
      description:
        'Build and manage your own superhero universe. Define powers, edit profiles, and organize your personal justice league.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Test'],
      repoUrl: 'https://github.com/cristian-gl-wd/superheroes',
      featured: true,
    },
    {
      id: 4,
      title: 'Portfolio (V1)',
      description:
        'Explore my coding journey and projects. See my skills in action and discover how I can contribute to your next development endeavor.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/cristian-gl-wd/portfoliov1',
      featured: true,
    }
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

  get projectsReverse(): Project[] {
    return [...this.projects].reverse();
  }
}
