import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rmedicosperros',
  templateUrl: './rmedicosperros.component.html',
  styleUrls: ['./rmedicosperros.component.scss']
})
export class RmedicosperrosComponent {


  
  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsRegistrosmedicosperros().subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.filteredRpersonas=persona;
      console.log(this.filteredRpersonas);
      } else {
      }
    });
  // Inicializa los lotes filtrados al inicio
  }

  editRmedicoperro(id_dato_medico: number) {
    this.router.navigate([`rmedicosperrosEditar/${id_dato_medico}`]);
}

confirmarEliminacion(id_dato_medico: number) {
  this.idAEliminar = id_dato_medico;
  this.mostrarAlerta = true;
}

eliminarRmedicoperro(id_dato_medico: number) {
  this.http.eliminarRegistromedicosperro(id_dato_medico).subscribe((response) => {
    this.router.navigate([`rmedicosperros`]);
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
