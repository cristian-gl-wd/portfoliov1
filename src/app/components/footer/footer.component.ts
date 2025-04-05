import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  private navigationService = inject(NavigationService);

  currentYear = new Date().getFullYear();

  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact me' },
  ];

  scrollTo(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }
}
