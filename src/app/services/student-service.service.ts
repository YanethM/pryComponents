import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private students: Student[] = [
    {
      name: 'Student One',
      photo: 'assets/img/heroe1.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student Two',
      photo: 'assets/img/heroe2.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student 3',
      photo: 'assets/img/heroe3.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student 4',
      photo: 'assets/img/heroe4.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student 5',
      photo: 'assets/img/heroe5.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student One',
      photo: 'assets/img/heroe1.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student 2',
      photo: 'assets/img/heroe2.png',
      education: 'University',
      description: 'Info'
    },
    {
      name: 'Student Tres',
      photo: 'assets/img/heroe3.png',
      education: 'University',
      description: 'Info'
    }
  ];

  public getStudents() {
    return this.students;
  }

  constructor() { }
}

export interface Student{
  name: string;
  photo: string;
  education: string;
  description: string;
}
