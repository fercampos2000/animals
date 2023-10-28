import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-contcomidperroseditar',
  templateUrl: './contcomidperroseditar.component.html',
  styleUrls: ['./contcomidperroseditar.component.scss']


})
export class ContcomidperroseditarComponent {


    //array
     filteredRpersonas: any[] = [];
     idtb_registro_comida: number = 0;
     cantidad_ingreso : number = 0;
     fecha_ingreso : string = '';
     ffecha : string = '';
     fechaa : string = '';

  
    constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const id_persona = params['id'];
        console.log(id_persona)
        // Ahora puedes usar el valor de "idLote" en esta vista para filtrar los árboles
       this.idtb_registro_comida = id_persona;
       console.log(this.idtb_registro_comida);
      });
      this.http.getCCperro(this.idtb_registro_comida).subscribe(data => {
  
        if (data !== null) {
          const persona = data as any;
          console.log(persona);
          this.cantidad_ingreso=persona[0].cantidad_ingreso;
          this.ffecha=persona[0].fecha_ingreso;
          console.log(this.cantidad_ingreso);
          console.log(this.fechaa);
        } else {
        }
      });
    }

  

  
    editarRpersona(cantidad_ingreso:number, fecha_ingreso: string){
      let editarRpersona: any;
        editarRpersona = {
          idtb_registro_comida: this.idtb_registro_comida,
          cantidad_ingreso: cantidad_ingreso,
          fecha_ingreso: fecha_ingreso,
        }
  
        this.http.editarCCperro(editarRpersona).subscribe(result=>{
          if(result.message!==''){
                this.router.navigate([`contcomidperrosLista`])
          }else{
          }
        })
      }
}
