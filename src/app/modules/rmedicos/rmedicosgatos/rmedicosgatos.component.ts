import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rmedicosgatos',
  templateUrl: './rmedicosgatos.component.html',
  styleUrls: ['./rmedicosgatos.component.scss']
})
export class RmedicosgatosComponent {


  
  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsRegistrosmedicosgatos().subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.filteredRpersonas=persona;
      console.log(this.filteredRpersonas);
      } else {
      }
    });
  // Inicializa los lotes filtrados al inicio
  }

  editRmedicogato(id_dato_medico: number) {
    this.router.navigate([`rmedicosgatosEditar/${id_dato_medico}`]);
}

confirmarEliminacion(id_dato_medico: number) {
  this.idAEliminar = id_dato_medico;
  this.mostrarAlerta = true;
}

eliminarRmedicogato(id_dato_medico: number) {
  this.http.eliminarRegistromedicosgato(id_dato_medico).subscribe((response) => {
    this.router.navigate([`rmedicosgatos`]);
    this.filteredRpersonas = this.filteredRpersonas.filter((persona) => persona.id_dato_medico !== id_dato_medico);
    this.mostrarAlerta = false; // Oculta la alerta después de eliminar
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
