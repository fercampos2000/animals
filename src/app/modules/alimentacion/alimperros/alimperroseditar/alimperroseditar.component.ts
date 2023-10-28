import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-alimperroseditar',
  templateUrl: './alimperroseditar.component.html',
  styleUrls: ['./alimperroseditar.component.scss']
})
export class AlimperroseditarComponent {

//variables
  ffecha : string = '';

  sector1 : string = '';
  estado_sector1 : string = '';
  fecha1 : string = '';
  sector2 : string = '';
  estado_sector2 : string = '';
  fecha2 : string = '';
  sector3 : string = '';
  estado_sector3 : string = '';
  fecha3 : string = '';
  sector4 : string = '';
  estado_sector4 : string = '';
  fecha4 : string = '';
  //fecha : string = '';


  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const Fecha = params['fecha'];
     this.ffecha = Fecha;
     console.log(this.ffecha);
    });
    this.http.getAlimentacionperro(this.ffecha).subscribe(data => {

      if (data !== null) {
        const alimen = data as any;
        console.log(alimen);
       // this.originalLotes = arboles;
        // Asigna los mismos datos a filteredLotes
        this.estado_sector1=alimen[0].estado_sector;
        this.estado_sector2=alimen[1].estado_sector;
        this.estado_sector3=alimen[2].estado_sector;
        this.estado_sector4=alimen[3].estado_sector;
      } else {
        console.log("ERROR AL OBTENER LOS DATOS");
      }
    });
  }

    editarAlimperro(sector1:string,
                    estado_sector1: string, 
                    fecha: string,
                    sector2:string, 
                    estado_sector2: string, 
                    sector3:string, 
                    estado_sector3: string,
                    sector4:string, 
                    estado_sector4: string){
      let editarRpersona: any;
        editarRpersona = {
          sector1: sector1,
          estado_sector1: estado_sector1,
          fecha1: fecha,
          sector2: sector2,
          estado_sector2: estado_sector2,
          fecha2: fecha,
          sector3: sector3,
          estado_sector3: estado_sector3,
          fecha3: fecha,
          sector4: sector4,
          estado_sector4: estado_sector4,
          fecha4: fecha
        }
        console.log(editarRpersona);
  
        this.http.editarAlimentacionperro(editarRpersona, this.ffecha).subscribe(result=>{
          if(result.message!==''){
                this.router.navigate([`alimperrosMostrar`])
          }else{
            console.log("ERROR AL OBTENER LOS DATOS");
          }
        })
      }

}
