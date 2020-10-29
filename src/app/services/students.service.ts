import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [
    {
      nombre: 'Aprendiz1',
      titulo:'Tgo ADSI',
      img: 'assets/img/aprendiz1.jpg',
      habilidad: 'habilidad1'
    },
    {
      nombre: 'Aprendiz2',
      titulo:'Ingeniero de Sistemas',
      img: 'assets/img/aprendiz2.jpg',
      habilidad: 'habilidad2'
    },
    {
      nombre: 'Aprendiz3',
      titulo:'Tgo ADSI',
      img: 'assets/img/aprendiz3.jpg',
      habilidad: 'habilidad3'
    },
    {
      nombre: 'Aprendiz4',
      titulo:'Administrador de Sistemas',
      img: 'assets/img/aprendiz4.jpg',
      habilidad: 'habilidad4'
    },
    {
      nombre: 'Aprendiz5',
      titulo:'Tgo ADSI',
      img: 'assets/img/aprendiz5.jpg',
      habilidad: 'habilidad5'
    },
    {
      nombre: 'Aprendiz6',
      titulo:'Tgo ADSI',
      img: 'assets/img/aprendiz6.jpg',
      habilidad: 'habilidad6'
    },
    {
      nombre: 'Aprendiz7',
      titulo:'Tgo ADSI',
      img: 'assets/img/aprendiz7.jpg',
      habilidad: 'habilidad7'
    },
    {
      nombre: 'Aprendiz8',
      titulo: 'Ingeniero de Sistemas',
      img: "assets/img/aprendiz6.jpg",
      habilidad: 'habilidad8'
    }
  ];
  getStudents() {
    return this.students;
  }
  constructor() { 
  }
}

  export interface Student{
    nombre:string;
    titulo :string;
    img:string;
    habilidad:string;
};
 
