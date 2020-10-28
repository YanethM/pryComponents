import { Component, OnInit } from '@angular/core';
import { StudentServiceService, Student } from '../../services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  students: Student[] = [];
  constructor(private _studentsService: StudentServiceService) { }

  ngOnInit(): void {
    this.students = this._studentsService.getStudents();
    console.log(this.students);
  }

}
