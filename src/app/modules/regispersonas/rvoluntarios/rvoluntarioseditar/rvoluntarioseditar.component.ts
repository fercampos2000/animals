import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rvoluntarioseditar',
  templateUrl: './rvoluntarioseditar.component.html',
  styleUrls: ['./rvoluntarioseditar.component.scss']
})
export class RvoluntarioseditarComponent {
  //array
  filteredRpersonas: any[] = [];
  //variables globales
  id_person : number = 0;
  nombre : string = '';
  apellido : string = '';
  edad : string = '';
  grado_academico : string = '';
  telefono : string = '';
  direccion : string = '';

  valorNivelacademico : string = '';


 

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id_persona = params['id_voluntario'];
      console.log(id_persona)
      // Ahora puedes usar el valor de "idLote" en esta vista para filtrar los árboles
     this.id_person = id_persona;
     console.log(this.id_person);
    });
    this.http.getrvoluntario(this.id_person).subscribe(data => {

      if (data !== null) {
        const persona = data as any;
       // this.originalLotes = arboles;
        // Asigna los mismos datos a filteredLotes
        this.nombre=persona[0].nombre;
        this.apellido=persona[0].apellido;
        this.edad=persona[0].edad;
        this.grado_academico=persona[0].grado_academico;
        //this.valorNivelacademico = this.grado_academico;
        this.telefono=persona[0].telefono;
        this.direccion=persona[0].direccion;
      //console.log(persona[0].nombre);

      } else {
      }
    });
  }
  
    editarRvoluntario(nombre:string, apellido: string, edad: string, academico : string,telefono: string, direccion: string){
      let editarRpersona: any;
        editarRpersona = {
          id_persona: this.id_person,
          nombre: nombre,
          apellido: apellido,
          edad: edad,
          grado_academico: academico,
          telefono: telefono,
          direccion: direccion
        }
  
        this.http.editarVoluntario(editarRpersona).subscribe(result=>{
          if(result.message!==''){
                this.router.navigate([`rvoluntarios`])
          }else{
          }
        })
      }
}
