import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Location {
  city: string;
  country: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  location: Location;
  from: number;
  to?: number;
  description: string[];
  technologies: string[];
  current?: boolean;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: Location;
  from: number;
  to?: number;
  description?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent {
  workExperiences: Experience[] = [
    {
      id: 1,
      position: 'Full stack developer',
      company: 'MyEnergyMap',
      location: {
        city: 'Valencia',
        country: 'España'
      },
      from: 2016,
      to: 2017,
      description: [
        'Desarrollo de aplicaciones web utilizando Angular y TypeScript.',
        'Implementación de arquitecturas modernas con componentes standalone.',
        'Liderazgo técnico en proyectos para clientes del sector financiero.',
        'Optimización de rendimiento y experiencia de usuario en aplicaciones existentes.',
      ],
      technologies: ['JavaScript', 'jQuery', 'MySQL', 'PHP', 'CSS', 'HTML'],
    },
    {
      id: 2,
      position: 'Software developer',
      company: 'Grupo Alonso',
      location: {
        city: 'Valencia',
        country: 'España'
      },
      from: 2019,
      to: 2021,
      description: [
        'Desarrollo de interfaces de usuario para aplicaciones web y móviles.',
        'Creación de componentes reutilizables siguiendo principios de Design System.',
        'Colaboración en equipo utilizando metodologías ágiles (Scrum).',
        'Integración con APIs RESTful y servicios externos.',
      ],
      technologies: [
        'Angular',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Git',
      ],
    },
    {
      id: 3,
      position: 'Frontend developer',
      company: 'Grupo Alonso',
      location: {
        city: 'Madrid',
        country: 'España'
      },
      from: 2021,
      current: true,
      description: [
        'Desarrollo de interfaces de usuario para aplicaciones web y móviles.',
        'Creación de componentes reutilizables siguiendo principios de Design System.',
        'Colaboración en equipo utilizando metodologías ágiles (Scrum).',
        'Integración con APIs RESTful y servicios externos.',
      ],
      technologies: [
        'Angular',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Git',
      ],
    }
  ];

  educationHistory: Education[] = [
    {
      id: 1,
      degree: 'Technical degree in Microcomputer Systems and Networks',
      institution: 'IES La Senia',
      location: {
        city: 'Paiporta',
        country: 'España'
      },
      from: 2013,
      to: 2015,
      description:
        'Specialized technical education in computer systems and web development with focus on application configuration, network implementation, and software integration, building essential foundations for Angular front-end development.'
    },
    {
      id: 2,
      degree: 'Web application development',
      institution: 'IES Consellería',
      location: {
        city: 'Valencia',
        country: 'España'
      },
      from: 2015,
      to: 2017,
      description:
        'Advanced technical education in web application development encompassing full-stack programming, database management, and interface design with specialized focus on client-side technologies. Comprehensive training in deployment workflows and application security principles directly applicable to professional Angular development environments.ReintentarClaude puede cometer errores. Verifique las respuestas.'
    }
  ];

  activeTab: 'work' | 'education' = 'work';

  setActiveTab(tab: 'work' | 'education'): void {
    this.activeTab = tab;
  }
}
