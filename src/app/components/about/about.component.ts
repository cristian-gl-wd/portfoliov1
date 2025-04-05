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
  professionalSummarys: string[];
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
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
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
    professionalSummarys: [
      "Hey! I'm a frontend developer with a soft spot for making things look and feel awesome on the web. From messing around with computers as a kid to diving deep into code, I knew this was my thing.",
      "I'm all about that visual and creative side of web development – seeing a blank page turn into something cool is super satisfying. Throw a tricky coding challenge my way, and I'm hooked! I love digging in and figuring things out until it clicks.",
      "Right now, Angular is my main jam. I started with the basics like HTML, CSS, and JavaScript (even touched some PHP back in the day). My first job got me familiar with those plus jQuery, AJAX, and Bootstrap. Then, I took a detour into C++ backend, but quickly realized my passion was frontend. Now, I'm fully in the Angular world, where I've done some cool stuff like migrating a project from LESS to SCSS (and getting into CSS variables!). I work with things like NgRx, Bootstrap, Kendo, and Angular Material using SCSS.",
      "Keen to keep learning and growing, especially in an international environment. There's so much to discover in tech, it's kinda mind-blowing!",
      "Looking for interesting frontend gigs where I can keep leveling up. Hit me up if you think I'd be a good fit!",
    ],
  };
}
