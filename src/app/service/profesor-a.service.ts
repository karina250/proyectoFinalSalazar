import { Injectable } from '@angular/core';
import { from, Observable,throwError } from 'rxjs';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{retry,catchError, map}from'rxjs/operators';
import { AlumnoModel } from '../models/alumno.model';
import { ProfesorModel } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorAService {
  urlProfesor='https://practicamongodb-karinasalazar.herokuapp.com/api/profesor';
  
  constructor(private http: HttpClient) { }

  
  getProfesor(){
    const url = 'https://practicamongodb-karinasalazar.herokuapp.com/api/profesor';
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.get(url)
    .pipe(map(data => {
      return Object.values(data);
    }));
        
  }
  postProfesor(profesor:ProfesorModel){
    const url = 'https://practicamongodb-karinasalazar.herokuapp.com/api/profesor';
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.post(url,profesor,{headers})
    .pipe(map(data => {
      return Object.values(data);
    }));
        
  }

  deleteProfesor(_id:any){
    const url = `https://practicamongodb-karinasalazar.herokuapp.com/api/profesor/${_id}`;
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });

    return this.http.delete(url,{headers});
          
  }

  putProfesor(profesor:ProfesorModel,_id:any){
    const url = `https://practicamongodb-karinasalazar.herokuapp.com/api/profesor/${_id}`;

    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM3MGY1NGU0NDVmMTAwMTcwMzlhZjMiLCJpYXQiOjE2MDY4ODExMDgsImV4cCI6MTYwNjkyNDMwOH0.g_RhFAOeIOzWpWoozQ5sEjY8GUYYmQMKTeZG8DyOZkY'
    });
   const profesorTemp={
     ...profesor
     
   } 
   delete profesorTemp._id;
    return this.http.put(url,profesorTemp,{headers});
          
  }
  


}
