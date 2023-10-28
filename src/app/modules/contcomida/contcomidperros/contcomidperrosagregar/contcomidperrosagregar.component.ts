import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-contcomidperrosagregar',
  templateUrl: './contcomidperrosagregar.component.html',
  styleUrls: ['./contcomidperrosagregar.component.scss']
})
export class ContcomidperrosagregarComponent {
[x: string]: any;


     //array
     filteredRpersonas: any[] = [];
     cantidad_ingreso : number = 0;
     fecha_ingreso : string = '';

   
   
     constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
   
     agregarpersona(cantidad_ingreso:number, fecha_ingreso: string){
       let editarRpersona: any;
         editarRpersona = {
          cantidad_ingreso: cantidad_ingreso,
          fecha_ingreso: fecha_ingreso,
         }
   
         this.http.agregCCperro(editarRpersona).subscribe(result=>{
           if(result.message!==''){
                 this.router.navigate([`contcomidperrosLista`])
           }else{
           }
         })
       }
}
