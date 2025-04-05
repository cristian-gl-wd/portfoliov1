import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private document = inject(DOCUMENT);
  private activeSection = new BehaviorSubject<string>('home');

  activeSection$ = this.activeSection.asObservable();

  /**
   * Realiza un scroll suave hacia la sección especificada
   * @param sectionId ID de la sección a la que se desea desplazar
   */
  scrollToSection(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.next(sectionId);
    }
  }

  /**
   * Actualiza la sección activa actual
   * @param sectionId ID de la sección activa
   */
  setActiveSection(sectionId: string): void {
    this.activeSection.next(sectionId);
  }
}
