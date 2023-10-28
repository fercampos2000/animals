import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-alimgatosmostrar',
  templateUrl: './alimgatosmostrar.component.html',
  styleUrls: ['./alimgatosmostrar.component.scss']
})
export class AlimgatosmostrarComponent {

  filteredRpersonas: any[] = [];
  Fecha: string = '';

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsAlimentaciongatos().subscribe(data => {
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
    this.router.navigate([`rmedicosgatosEditar/${id_dato_medico}`]);
}
}
