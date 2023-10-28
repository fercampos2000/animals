import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rmedicosperrosagregar',
  templateUrl: './rmedicosperrosagregar.component.html',
  styleUrls: ['./rmedicosperrosagregar.component.scss']
})
export class RmedicosperrosagregarComponent {

      //variables
      perrosNombres: any[] = [];
      nombresPerros: string[] = [];
  
      id_dato_medico : number = 0;

      nombreanimal : string = '';
      agresividad : string = '';
      esterilizacion : string = '';
      vacuna1 : string = '';
      vacuna2 : string = '';
      otro : string = '';
     
     
       constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
     //consultar datos medicos

     ngOnInit() {
      ///consultar los animales
      this.http.getsranimalesp().subscribe(datos => {
        if (datos !== null) {
         const animales = datos as any;
          this.perrosNombres = animales;
          //nombresPerros: any[] = [];
          this.nombresPerros=this.perrosNombres.map(perro => perro.nombre);
        console.log(this.perrosNombres);
        console.log(this.nombresPerros);
        } else {
        }
      });
      ///*////////////////////////////////
     /* this.route.params.subscribe(params => {
        const id_persona = params['id_rmedicoperro'];
       // console.log(id_persona)
        // Ahora puedes usar el valor de "idLote" en esta vista para filtrar los árboles
       this.id_dato_medico = id_persona;
       console.log(this.id_dato_medico);
      });
      this.http.getRegistromedicoperro(this.id_dato_medico).subscribe(data => {
  
        if (data !== null) {
          const persona = data as any;
         // this.originalLotes = arboles;
          // Asigna los mismos datos a filteredLotes
          this.nombreanimal=persona[0].nombreanimal;
          this.agresividad=persona[0].agresividad;
          this.esterilizacion=persona[0].esterilizacion;
          this.vacuna1=persona[0].vacuna1;
          //this.valorNivelacademico = this.grado_academico;
          this.vacuna2=persona[0].vacuna2;
          this.otro=persona[0].otro;
        //console.log(persona[0].nombre);
  
        } else {
        }
      });*/
    }
    //agregar nuevo registro
       agregardatomedicoperro(nombreanimal:string, agresividad: string, esterilizacion: string,vacuna1:string, vacuna2: string, otro: string){
         let agregarRmedicoperro: any;
              agregarRmedicoperro = {
              nombreanimal: nombreanimal,
              agresividad: agresividad,
              esterilizacion: esterilizacion,
              vacuna1: this.vacuna1,
              vacuna2: vacuna2,
              otro: otro
           }
     
           this.http.agregRegistromedicosperro(agregarRmedicoperro).subscribe(result=>{
             if(result.message!==''){
                   this.router.navigate([`rmedicosperros`])
             }else{
             }
           })
         }
}
