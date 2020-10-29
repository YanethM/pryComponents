import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';

import { appRouting } from './app.routes';
import { StudentsService } from './services/students.service';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    HomeComponent,
    AboutComponent,
    EstudiantesComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
