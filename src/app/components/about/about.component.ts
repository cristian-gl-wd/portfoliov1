import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Location {
  city: string;
  country: string;
}

interface PersonalInfo {
  name: string;
  surname: string;
  birthDate: Date;
  age: () => number;
  location: Location;
  email: string;
  languages: string[];
  interests: string[];
  professionalSummary: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutComponent {
  personalInfo: PersonalInfo = {
    name: 'Cristian',
    surname: 'García López',
    birthDate: new Date(1995, 10, 27),
    age: function () {
      const today = new Date();
      const birthDate = this.birthDate;
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    location: {
      city: 'Valencia',
      country: 'España',
    },
    email: 'cristian.gl.wd@gmail.com',
    languages: ['Spanish', 'English', 'Catalan'],
    interests: ['Web development', 'UX/UI', 'New technologies'],
    professionalSummary:
      'I am a frontend developer with experience in creating modern and responsive web applications. My speciality is Angular, although I have experience with other technologies in the web ecosystem. I love learning new technologies and applying best practices in software development to create high quality products.',
  };
}
