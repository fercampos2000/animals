import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestsService } from '@shared/services/rests.service';
import { LoginService } from 'app/services/auth/login.service';
import { LoginRequest } from 'app/services/auth/loginRequest';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    // Variables
    correo: string = '';
    contrasena: string = '';
    valor: number = 0;
    correoInvalid: boolean = false;
    contrasenaInvalid: boolean = false;

    constructor(private router: Router, private http: RestsService, private route: ActivatedRoute, private cookieService: CookieService) {}

    consultarlogin(correo: string, contrasena: string) {
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

        // Continuar con el proceso de inicio de sesión
        let loginconsult: any;
        loginconsult = {
            correo: correo,
            contrasena: contrasena
        }
        this.http.getrLogin(loginconsult).subscribe(data => {
          if (data !== null) {
              const login = data as any;
              this.valor = login[0].VALOR;
             // console.log(this.valor);

              if (this.valor === 1) {
                  this.cookieService.set('token_access', login[0].VALOR, 4, '/');
                  this.router.navigate([`menuinit`]);
              } else {
                  alert("Error al ingresar datos, ingrese los de nuevo");
                  console.log("correo o contraseña mal escritos, ingrese los de nuevo");
              }
          } else {
              console.log("Error al recibir los datos");
          }
      });
/*
        this.http.getrLogin(loginconsult).subscribe(data => {
            if (data !== null) {
                const login = data as any;
                this.valor = login[0].VALOR;
               // console.log(this.valor);

                if (this.valor === 1) {
                  localStorage.setItem('token',login)
                   localStorage.setItem('responseLogin',JSON.stringify(this.valor))
                    this.router.navigate([`menuinit`]);
                } else {
                    alert("Error al ingresar datos, ingrese los de nuevo");
                    console.log("correo o contraseña mal escritos, ingrese los de nuevo");
                }
            } else {
                console.log("Error al recibir los datos");
            }
        });*/
    }
}
