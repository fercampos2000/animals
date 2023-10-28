import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-rgatos',
  templateUrl: './rgatos.component.html',
  styleUrls: ['./rgatos.component.scss']
})
export class RgatosComponent {

  filteredRperros: any[] = [];
  mostrarAlerta: boolean = false;
  idAEliminar: number = 0;

  constructor(private router: Router, private http: RestsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsRgatos().subscribe(data => {
      if (data !== null) {
        const perro = data as any;
        this.filteredRperros = perro;
      } else {
      }
    });
  }

  editRpersona(id_animal: number) {
      this.router.navigate([`rgatosEditar/${id_animal}`]);
  }

  confirmarEliminacion(id_animal: number) {
      this.idAEliminar = id_animal;
      this.mostrarAlerta = true;
  }

  eliminarRpersona(id_animal: number) {
      this.http.eliminarRgato(id_animal).subscribe((response) => {
        this.router.navigate([`rgatos`]);
        this.filteredRperros = this.filteredRperros.filter((perro) => perro.id_animal !== id_animal);
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
