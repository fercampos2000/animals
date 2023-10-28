import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-alimperrosagregar',
  templateUrl: './alimperrosagregar.component.html',
  styleUrls: ['./alimperrosagregar.component.scss']
})
export class AlimperrosagregarComponent {


      //variables
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

     
     
       constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

    //agregar nuevo registro
       agregaralimentoperro(sector1:string,
                              estado_sector1: string, 
                              fecha: string,
                              sector2:string, 
                              estado_sector2: string, 
                              sector3:string, 
                              estado_sector3: string,
                              sector4:string, 
                              estado_sector4: string){
         let agregarRmedicoperro: any;
              agregarRmedicoperro = {
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
     
           this.http.agregAlimentacionperro(agregarRmedicoperro).subscribe(result=>{
             if(result.message!==''){
                   this.router.navigate([`alimperrosMostrar`])
             }else{
             }
           })
         }
}
