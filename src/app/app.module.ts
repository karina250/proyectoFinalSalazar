import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { ProfesorComponent } from './component/profesor/profesor.component';
import { CursoComponent } from './component/curso/curso.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ProfesorComponent,
    CursoComponent,
    UsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
