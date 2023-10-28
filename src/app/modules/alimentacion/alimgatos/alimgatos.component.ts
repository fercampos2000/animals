import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-alimgatos',
  templateUrl: './alimgatos.component.html',
  styleUrls: ['./alimgatos.component.scss']
})
export class AlimgatosComponent {

  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: string = '';
  Fecha: string = '';

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  editRmedicoperro(fecha: string) {
    this.router.navigate([`alimgatosEditar/${fecha}`]);
}

Buscarregistro(fecha:string) {
  console.log(fecha);
  this.Fecha = fecha;
  this.http.getAlimentaciongato(this.Fecha).subscribe(data => {
    if (data !== null) {
      const persona = data as any;
      this.filteredRpersonas=persona;
    console.log(this.filteredRpersonas);
    } else {
      window.confirm('¿El registro que buscas no existe?');
    }
  });
}

confirmarEliminacion(fecha: string) {
  this.idAEliminar = fecha;
  this.mostrarAlerta = true;
}

eliminarRmedicoperro(fecha: string) {
  this.http.eliminarAlimentaciongato(fecha).subscribe((response) => {
    console.log(fecha);
    this.router.navigate([`alimgatosMostrar`]);
   // this.filteredRpersonas = this.filteredRpersonas.filter((persona) => persona.id_dato_medico !== id_dato_medico);
   // this.mostrarAlerta = false; // Oculta la alerta después de eliminar
  },
  (error) => {
    console.error('Error al eliminar el registro', error);
    // Maneja el error, por ejemplo, mostrando un mensaje de error al usuario.
  });
}

cancelarEliminacion() {
  this.mostrarAlerta = false;
}
}
