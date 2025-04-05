import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

interface RSSInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  formSuccess = false;

  contactInfo: RSSInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'cristian.gl.wd@gmail.com',
      link: 'mailto:cristian.gl.wd@gmail.com',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      value: 'Valencia, España',
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'cristian-gl-wd',
      link: 'https://www.linkedin.com/in/cristian-gl-wd/',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.formSuccess = true;
    this.contactForm.reset();
    this.submitted = false;

    setTimeout(() => {
      this.formSuccess = false;
    }, 5000);
  }
}
