import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rvoluntariosagregar',
  templateUrl: './rvoluntariosagregar.component.html',
  styleUrls: ['./rvoluntariosagregar.component.scss']
})
export class RvoluntariosagregarComponent {

     //array
     filteredRpersonas: any[] = [];
     nombre : string = '';
     apellido : string = '';
     edad : string = '';
     grado_academico : string = '';
     telefono : string = '';
     direccion : string = '';
   
   
    
   
     constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
   
     agregarvoluntario(nombre:string, apellido: string, edad: string,grado_academico:string, telefono: string, direccion: string){
       let agregarRpersona: any;
       agregarRpersona = {
           nombre: nombre,
           apellido: apellido,
           edad: edad,
           grado_academico: this.grado_academico,
           telefono: telefono,
           direccion: direccion
         }
   
         this.http.agregarRVoluntario(agregarRpersona).subscribe(result=>{
           if(result.message!==''){
                 this.router.navigate([`rvoluntarios`])
           }else{
           }
         })
       }


}
