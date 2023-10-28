import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rgatoseditar',
  templateUrl: './rgatoseditar.component.html',
  styleUrls: ['./rgatoseditar.component.scss']
})
export class RgatoseditarComponent {

      //array
      //array
      filteredRpersonas: any[] = [];
      id_animal : number = 0;
      id_anim : number = 0;
      imagen : string = '';
      nombre : string = '';
      edad : string = '';
      raza : string = '';
      imagen1 : string = '';
      nombre1 : string = '';
      edad1 : string = '';
      raza1 : string = '';
      ImagenArbol: string = '';
      imagenSeleccionada: string | ArrayBuffer | null = null;
  
  
   
  
    constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const id_persona = params['id'];
        console.log(id_persona)
        // Ahora puedes usar el valor de "idLote" en esta vista para filtrar los árboles
       this.id_anim = id_persona;
      });
      this.http.getRgato(this.id_anim).subscribe(data => {
  
        if (data !== null) {
          const persona = data as any;
          this.nombre=persona[0].nombre;
          this.edad=persona[0].edad;
          this.raza=persona[0].raza;
          this.imagen=persona[0].imagen;

        } else {
        }
      });
    }

    onFileChange(event: any): void {
    
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const ImagenArbolbase64 = e.target.result;
          this.ImagenArbol = ImagenArbolbase64;
          console.log(this.ImagenArbol)
          this.imagenSeleccionada = e.target?.result || null; // Añadir un valor predeterminado
        };
        reader.readAsDataURL(file);
      }
    }
  
    editarRperroo(nombre1:string, edad1: string, raza1 : string){
      let editarRpersona: any;
        editarRpersona = {
          id_animal: this.id_anim,
          nombre: nombre1,
           edad: edad1,
           raza: raza1,
           imagen: this.ImagenArbol
        }
          this.http.editarRgato(editarRpersona).subscribe(result=>{
            if(result.message!==''){
                  this.router.navigate([`rgatos`])
            }else{
            }
          })
      }
}
