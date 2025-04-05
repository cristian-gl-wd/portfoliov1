import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent {
  private navigationService = inject(NavigationService);

  scrollToAbout(): void {
    this.navigationService.scrollToSection('about');
  }
  
  scrollToProjects(): void {
    this.navigationService.scrollToSection('projects');
  }
}