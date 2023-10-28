import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rgatosagregar',
  templateUrl: './rgatosagregar.component.html',
  styleUrls: ['./rgatosagregar.component.scss']
})
export class RgatosagregarComponent {

  public archivos : any = [];


  //array
  filteredRpersonas: any[] = [];
  id_animal : number = 0;
  imagen : string = '';
  nombre : string = '';
  edad : string = '';
  raza : string = '';
  ImagenArbol: string = '';
  imagenSeleccionada: string | ArrayBuffer | null = null;



  capturarFile(event: any): any {
   const archivoCapturado = event.target.files[0];
   this.archivos.push(archivoCapturado);
   //console.log(event.target.files);
  }

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

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

  agregarPerro(nombre: string, edad: string, raza:string){
    let editarRpersona: any;
      editarRpersona = {
       nombre: nombre,
        edad: edad,
        raza: raza,
        imagen: this.ImagenArbol
      }
     
      console.log(this.nombre);
      console.log(this.edad);
      console.log(this.raza);
      console.log(this.imagen);
      

      this.http.agregRgato(editarRpersona).subscribe(result=>{
        if(result.message!==''){
              this.router.navigate([`rgatos`])
        }else{
        }
      })
    }
}
