import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-contcomidgatoslistar',
  templateUrl: './contcomidgatoslistar.component.html',
  styleUrls: ['./contcomidgatoslistar.component.scss']
})
export class ContcomidgatoslistarComponent {

  filteredRpersonas: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsCCgatos().subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.filteredRpersonas = persona;
      } else {
      }
    });
  }

  editRpersona(idtb_registro_comida: number) {
      this.router.navigate([`contcomidgatosEditar/${idtb_registro_comida}`]);
  }

  confirmarEliminacion(id_persona: number) {
      this.idAEliminar = id_persona;
      this.mostrarAlerta = true;
  }

  eliminarRpersona(idtb_registro_comida: number) {
      this.http.eliminarCCgato(idtb_registro_comida).subscribe((response) => {
        this.router.navigate([`contcomidgatosLista`]);
        this.filteredRpersonas = this.filteredRpersonas.filter((persona) => persona.idtb_registro_comida !== idtb_registro_comida);
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
