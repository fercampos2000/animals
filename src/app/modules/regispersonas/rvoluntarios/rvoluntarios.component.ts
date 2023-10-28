import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rvoluntarios',
  templateUrl: './rvoluntarios.component.html',
  styleUrls: ['./rvoluntarios.component.scss']
})
export class RvoluntariosComponent {

  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsrvoluntarios().subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.filteredRpersonas=persona;
      console.log(this.filteredRpersonas);
      } else {
      }
    });
  // Inicializa los lotes filtrados al inicio
  }

  editRvoluntario(id_persona: number) {
    this.router.navigate([`rvoluntariosEditar/${id_persona}`]);
}

confirmarEliminacion(id_persona: number) {
  this.idAEliminar = id_persona;
  this.mostrarAlerta = true;
}

eliminarRvoluntario(id_persona: number) {
  this.http.eliminarPersona(id_persona).subscribe((response) => {
    this.router.navigate([`rvoluntarios`]);
    this.filteredRpersonas = this.filteredRpersonas.filter((persona) => persona.id_persona !== id_persona);
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
