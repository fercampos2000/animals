import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-contcomidgatosagregar',
  templateUrl: './contcomidgatosagregar.component.html',
  styleUrls: ['./contcomidgatosagregar.component.scss']
})
export class ContcomidgatosagregarComponent {


  
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
   
         this.http.agregCCgato(editarRpersona).subscribe(result=>{
           if(result.message!==''){
                 this.router.navigate([`contcomidgatosLista`])
           }else{
           }
         })
       }
}
