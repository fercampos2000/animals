import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rpersonalagregar',
  templateUrl: './rpersonalagregar.component.html',
  styleUrls: ['./rpersonalagregar.component.scss']
})
export class RpersonalagregarComponent {
   //array
   filteredRpersonas: any[] = [];
   nombre : string = '';
   apellido : string = '';
   edad : string = '';
   grado_academico : string = '';
   telefono : string = '';
   direccion : string = '';
 
   obtengradoacad : string = '';
   valorNivelacademico : string = '';
 
 
  
 
   constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
 
   agregarpersona(nombre:string, apellido: string, edad: string, grado_academico:string, telefono: string, direccion: string){
     let editarRpersona: any;
       editarRpersona = {
         nombre: nombre,
         apellido: apellido,
         edad: edad,
         grado_academico: this.grado_academico,
         telefono: telefono,
         direccion: direccion
       }
 
       this.http.agregarRPersona(editarRpersona).subscribe(result=>{
         if(result.message!==''){
               this.router.navigate([`rpersonal`])
         }else{
         }
       })
     }

}
