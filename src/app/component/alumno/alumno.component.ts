
import { Component, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AlumnoModel } from 'src/app/models/alumno.model';
import{ServiceService}from '../../service/service.service'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnos:any=[];
  alumno=new AlumnoModel();
  @Input()estado:boolean=false;

  constructor( public Alumno:ServiceService) { 

    this.Alumno.getAlumno().subscribe(data=>{
      this.alumnos=data[1];
      console.log(data);
      });
      
  }
  
  registrar(form:NgForm){
    //if(!this.alumno._id){
    if(this.alumno._id){
      console.log("pruebapost");
      this.Alumno.putAlumno(this.alumno,this.alumno._id).subscribe();
      //this.Alumno.postAlumno(this.alumno).subscribe(data=>{
            
       // });
    }
    else{
      this.Alumno.postAlumno(this.alumno).subscribe(data=>{
        this.Alumno.getAlumno().subscribe(data=>{
          this.alumnos=data[1];
          console.log("probando");
          });
        });
        form.reset();
      //console.log("pruebaput2");
     // this.Alumno.putAlumno(this.alumno,this.alumno._id).subscribe();
    }
   // form.reset();
      
  }
  eliminar(alumno:AlumnoModel,i:number){
    console.log("prueba")

    this.Alumno.deleteAlumno(alumno._id).subscribe();
    this.alumnos.splice(i,1);
    //this.Alumno.getAlumno().subscribe(data=>{
      //this.alumnos=data[1];
      //})
  }

  editar(alumno:AlumnoModel){
    this.alumno=alumno;
  
   }

 
  
  ngOnInit(): void {
  }

}
