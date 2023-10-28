import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {


    // Variables
    correo: string = '';
    contrasena: string = '';
    contrasena2: string = '';
    valor: number = 0;
    correoInvalid: boolean = false;
    contrasenaInvalid: boolean = false;
    contrasenaInvalid2: boolean = false;

    constructor(private router: Router, private http: RestsService, private route: ActivatedRoute) {}

    consultarlogin(correo: string, contrasena: string, contrasena2: string) {
        // Validar el formato del correo
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
            this.correoInvalid = true;
            return;
        } else {
            this.correoInvalid = false;
        }

        // Validar si la contraseña está en blanco
        if (contrasena.trim() === '') {
            this.contrasenaInvalid = true;
            return;
        } else {
            this.contrasenaInvalid = false;
        }

                // Validar si la contraseña son iguales
        if (contrasena.trim() !== contrasena2.trim()) {
              this.contrasenaInvalid2 = true;
              return;
        } else {
              this.contrasenaInvalid2 = false;
        }

        // Continuar con el proceso de inicio de sesión
        let loginconsult: any;
        loginconsult = {
            correo: correo,
            contrasena: contrasena
        }


        let enviacorreo: any;
        enviacorreo = {
          email: correo,
          asunto: "Bienvenido al sistema ANIMALS",
          mensaje: "Tu correo y contraseña han sido registrados y guardados en el sistema."
        }
        this.http.enviacorreo(enviacorreo).subscribe(result=>{
          if(result.message!==''){
                alert("revise su GMAIL");
          }else{
          }
        })

        this.http.agregarRLogin(loginconsult).subscribe(result=>{
          if(result.message!==''){
                this.router.navigate([`login`])
                alert("Su registro fue correcto, inicie sesion con sus datos");
          }else{
          }
        })
    }
}
