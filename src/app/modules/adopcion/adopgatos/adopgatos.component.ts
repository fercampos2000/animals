import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-adopgatos',
  templateUrl: './adopgatos.component.html',
  styleUrls: ['./adopgatos.component.scss']
})
export class AdopgatosComponent {
  filteredRperros: any[] = [];
  mostrarAlerta: boolean = false;
  imagen: string = '';
  nombre: string = '';
  edad: string = '';
  raza: string = '';

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

   //MOSTRAR PDF
   generarpdf(id_animal: number) {
    this.http.getRgato(id_animal).subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.nombre = persona[0].nombre;
        this.edad = persona[0].edad;
        this.raza = persona[0].raza;
        this.imagen = persona[0].imagen;

        // Luego de recibir los datos, generas el PDF
        this.generatePDF();
      } else {
      }
    });
  }

  //DESCARGAR PDF
  descargarpdf(id_animal: number) {
    this.http.getRgato(id_animal).subscribe(data => {
      if (data !== null) {
        const persona = data as any;
        this.nombre = persona[0].nombre;
        this.edad = persona[0].edad;
        this.raza = persona[0].raza;
        this.imagen = persona[0].imagen;

        // Luego de recibir los datos, generas el PDF
        this.downloadPDF();
      } else {
      }
    });
  }


  //proceso de generacion

  generatePDF() {
    // Aquí colocas toda la lógica de generación de PDF que ya tienes.
    // Asegúrate de que esta parte del código se ejecute después de recibir los datos.
    const pdfDefinition: any = {
            content: [
        {
          stack: [
            'Bienvenido al Sistema de ANIMALS',
            {text: 'Este documento es solo para fines informativos', style: 'subheader'},
          ],
          style: 'header'
        },
        {
          stack: [
            'INFORMACIÓN DEL ANIMAL',
          ],
          style: 'header'
        },
        {
          stack: [
            {text: [
                'NOMBRE ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.nombre}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'EDAD ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.edad}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'RAZA ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.raza}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'FOTOGRAFÍA ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
	        image: `${this.imagen}`,
	        width: 350,
          height: 250,
          alignment: 'center',
          margin: [0, 0, 0, 5],
		    }, 
           ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 20]
        },
        subheader: {
          fontSize: 18
        },
        superMargin: {
          margin: [60, 0, 40, 0],
          fontSize: 15
        }
      }
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
    this.router.navigate([`adopgatos`]);
  }

  //proceso de descargar pdf
  downloadPDF() {
    // Aquí colocas toda la lógica de generación de PDF que ya tienes.
    // Asegúrate de que esta parte del código se ejecute después de recibir los datos.
    const pdfDefinition: any = {
            content: [
        {
          stack: [
            'Bienvenido al Sistema de ANIMALS',
            {text: 'Este documento es solo para fines informativos', style: 'subheader'},
          ],
          style: 'header'
        },
        {
          stack: [
            'INFORMACIÓN DEL ANIMAL',
          ],
          style: 'header'
        },
        {
          stack: [
            {text: [
                'NOMBRE ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.nombre}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'EDAD ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.edad}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'RAZA ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
          stack: [
            {text: [
              `${this.raza}`,
              ]
            },
          ],
          fontSize: 20,
          alignment: 'center',
          margin: [0, 15, 0, 5]
        },
        {
          stack: [
            {text: [
                'FOTOGRAFÍA ',
              ]
            },
          ],
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 5]
        },
        {
	        image: `${this.imagen}`,
	        width: 350,
          height: 250,
          alignment: 'center',
          margin: [0, 0, 0, 5],
		    }, 
           ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          alignment: 'center',
          margin: [0, 25, 0, 20]
        },
        subheader: {
          fontSize: 18
        },
        superMargin: {
          margin: [60, 0, 40, 0],
          fontSize: 15
        }
      }
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download();
    this.router.navigate([`adopgatos`]);
  }

}
