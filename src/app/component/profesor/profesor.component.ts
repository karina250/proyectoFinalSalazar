import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ProfesorModel } from 'src/app/models/profesor.model';
import{ProfesorAService}from '../../service/profesor-a.service'

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  @Input()estado:boolean=false;
  profesores:any=[];
  profesor=new ProfesorModel();
  

  constructor(public Profesor:ProfesorAService) {

    this.Profesor.getProfesor().subscribe(data=>{
      this.profesores=data[1];
      console.log(data);
      });

   }

   registrar(form:NgForm){
    
    if(this.profesor._id){
      console.log("pruebapost");
      this.Profesor.putProfesor(this.profesor,this.profesor._id).subscribe();
       
    }
    else{
      this.Profesor.postProfesor(this.profesor).subscribe(data=>{
        this.Profesor.getProfesor().subscribe(data=>{
          this.profesores=data[1];
          console.log("probando");
          });
        });
        form.reset(); 
    }
      
  }

  eliminar(profesor:ProfesorModel,i:number){
    console.log("prueba")

    this.Profesor.deleteProfesor(profesor._id).subscribe();
    this.profesores.splice(i,1);
    
  }

  editar(profesor:ProfesorModel){
    this.profesor=profesor;

    
  
   }

  resetForm(form?:NgForm){
   if(form ){
     form.reset();
     
   }
  
  }

  ngOnInit(): void {
  }

}
