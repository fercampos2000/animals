import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-alimperrosmostrar',
  templateUrl: './alimperrosmostrar.component.html',
  styleUrls: ['./alimperrosmostrar.component.scss']
})
export class AlimperrosmostrarComponent {

  filteredRpersonas: any[] = [];
  Fecha: string = '';

  constructor(private router: Router, private http: RestsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getsAlimentacionperros().subscribe(data => {
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
}
