import { Injectable } from '@angular/core';
import { from, Observable,throwError } from 'rxjs';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{retry,catchError, map}from'rxjs/operators';
import { AlumnoModel } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlAlumno='https://practicamongodb-karinasalazar.herokuapp.com/api/alumno';
  
  constructor(private http: HttpClient) {
    
   }

   getAlumno(){
    const url = 'https://practicamongodb-karinasalazar.herokuapp.com/api/alumno';
    const headers = new HttpHeaders({
     'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.get(url)
    .pipe(map(data => {
      return Object.values(data);
    }));
        
  }
  postAlumno(alumno:AlumnoModel){
    const url = 'https://practicamongodb-karinasalazar.herokuapp.com/api/alumno';
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.post(url,alumno,{headers})
    .pipe(map(data => {
      return Object.values(data);
    }));
        
  }

  deleteAlumno(_id:any){
    const url = `https://practicamongodb-karinasalazar.herokuapp.com/api/alumno/${_id}`;
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.delete(url,{headers});
          
  }

  putAlumno(alumno:AlumnoModel,_id:any){
    const url = `https://practicamongodb-karinasalazar.herokuapp.com/api/alumno/${_id}`;

    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });
   const alumnoTemp={
     ...alumno

   } 
   delete alumnoTemp._id;
    return this.http.put(url,alumnoTemp,{headers});
          
  }
  




}
