import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../../services/students.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styles: [
  ]
})
export class EstudiantesComponent implements OnInit {

  students: Student[] = [];
  constructor(private _studentsService: StudentsService) { 
  }

  ngOnInit(): void {
    this.students = this._studentsService.getStudents();
    console.log(this.students);
  }

}
