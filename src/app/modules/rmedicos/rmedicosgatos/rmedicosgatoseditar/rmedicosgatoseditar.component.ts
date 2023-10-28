import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rmedicosgatoseditar',
  templateUrl: './rmedicosgatoseditar.component.html',
  styleUrls: ['./rmedicosgatoseditar.component.scss']
})
export class RmedicosgatoseditarComponent {


  perrosNombres: any[] = [];
  nombresPerros: string[] = [];

  id_dato_medico : number = 0;
  nombre : string = '';
  agresividad : string = '';
  esterilizacion : string = '';
  vacuna1 : string = '';
  vacuna2 : string = '';
  otro : string = '';


  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    ///consultar los animales
    this.http.getsranimalesg().subscribe(datos => {
      if (datos !== null) {
       const animales = datos as any;
        this.perrosNombres = animales;
        //nombresPerros: any[] = [];
        this.nombresPerros=this.perrosNombres.map(perro => perro.nombre);
      } else {
        console.log("ERROR AL OBTENER LOS DATOS");
      }
    });
    ///*////////////////////////////////
    this.route.params.subscribe(params => {
      const id_persona = params['id_rmedicogato'];
     // console.log(id_persona)
      // Ahora puedes usar el valor de "idLote" en esta vista para filtrar los árboles
     this.id_dato_medico = id_persona;
     console.log(this.id_dato_medico);
    });
    this.http.getRegistromedicogato(this.id_dato_medico).subscribe(data => {

      if (data !== null) {
        const persona = data as any;
       // this.originalLotes = arboles;
        // Asigna los mismos datos a filteredLotes
        this.nombre=persona[0].nombre;
        this.agresividad=persona[0].agresividad;
        this.esterilizacion=persona[0].esterilizacion;
        this.vacuna1=persona[0].vacuna1;
        //this.valorNivelacademico = this.grado_academico;
        this.vacuna2=persona[0].vacuna2;
        this.otro=persona[0].otro;
      console.log(this.nombre);
      console.log(this.agresividad);

      } else {
        console.log("ERROR AL OBTENER LOS DATOS");
      }
    });
  }

    editarRmedicogato(nombre:string, agresividad: string, esterilizacion: string, vacuna1 : string,vacuna2: string, otro: string){
      let editarRpersona: any;
        editarRpersona = {
          id_dato_medico: this.id_dato_medico,
          nombreanimal: nombre,
          agresividad: agresividad,
          esterilizacion: esterilizacion,
          vacuna1: vacuna1,
          vacuna2: vacuna2,
          otro: otro
        }
        console.log(editarRpersona);
  
        this.http.editarRegistromedicosgato(editarRpersona).subscribe(result=>{
          if(result.message!==''){
                this.router.navigate([`rmedicosgatos`])
          }else{
            console.log("ERROR AL OBTENER LOS DATOS");
          }
        })
      }
}
