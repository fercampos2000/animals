import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rpersonal',
  templateUrl: './rpersonal.component.html',
  styleUrls: ['./rpersonal.component.scss']
})
export class RpersonalComponent {

  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsrpersonas().subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.filteredRpersonas = persona;
      } else {
      }
    });
  }

  editRpersona(id_persona: number) {
      this.router.navigate([`rpersonalEditar/${id_persona}`]);
  }

  confirmarEliminacion(id_persona: number) {
      this.idAEliminar = id_persona;
      this.mostrarAlerta = true;
  }

  eliminarRpersona(id_persona: number) {
      this.http.eliminarPersona(id_persona).subscribe((response) => {
        this.router.navigate([`rpersonal`]);
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


