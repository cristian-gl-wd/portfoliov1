import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  private navigationService = inject(NavigationService);

  activeSection = 'home';
  menuOpen = false;

  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact me' },
  ];

  constructor() {
    this.navigationService.activeSection$.subscribe((section: string) => {
      this.activeSection = section;
    });
  }

  scrollTo(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkActiveSection();
  }

  private checkActiveSection(): void {
    const sections = this.navItems.map((item) => item.id);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          if (this.activeSection !== section) {
            this.navigationService.setActiveSection(section);
          }
          break;
        }
      }
    }
  }
}
