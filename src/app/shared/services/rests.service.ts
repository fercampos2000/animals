import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tap, catchError } from 'rxjs/operators';
import { RCCanimales, Ralimentacion, Ranimales, Rlogin, Rmedicosperros, Rperros, Rpersonas } from '@shared/models/rpersonasModel';
import { RespuestaEditPersona } from '@shared/models/respuestas.Model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RestsService {
  URL = "http://localhost:4101/api/";
  constructor(private http:HttpClient, private jwtHelper:JwtHelperService) { }

  istoken:string='';
  numero:number=0;


  isAuth(): boolean {
    const token = localStorage.getItem('token');
    const storedData = localStorage.getItem('responseLogin');
  
    if (storedData !== null && token !== null) {
      this.istoken = token;
      const infoToken: Rlogin = JSON.parse(storedData);
      this.numero = Number(infoToken);
      console.log(this.numero);
      if (this.numero !== 1) {
        return false; // Token inválido
      
      }
  
      if (this.jwtHelper.isTokenExpired(this.istoken) || !localStorage.getItem('token')) {
        return false; // Token expirado o f
      }
  
      return true; // Usuario ha iniciado sesión correctamente
    }
  
    return false; // Datos de inicio de sesión faltantes o inválidos
  }

 
  //Login
    getrLogin(objetoControl: any): Observable<Rlogin> {
    return this.http.post<Rlogin>(`${this.URL}login/consult`,objetoControl);
  }

  agregarRLogin(objetoControl: any): Observable<RespuestaEditPersona> {
    return this.http.post<RespuestaEditPersona>(`${this.URL}login/agreg`,objetoControl);
  }

  enviacorreo(objetoControl: any): Observable<RespuestaEditPersona> {
    return this.http.post<RespuestaEditPersona>(`${this.URL}EV/envia`,objetoControl);
  }


  //Registros de personas
  getsrpersonas(): Observable<Rpersonas> {
    return this.http.get<Rpersonas>(`${this.URL}admins/consult`);
  }

  getrpersona(id_persona: number): Observable<Rpersonas> {
    return this.http.get<Rpersonas>(`${this.URL}admins/consult/${id_persona}`);
  }

  agregarRPersona(objetoControl: any): Observable<RespuestaEditPersona> {
    return this.http.post<RespuestaEditPersona>(`${this.URL}admins/agreg`,objetoControl);
  }

  editarPersona(objetoControl: any): Observable<RespuestaEditPersona> {
    return this.http.put<RespuestaEditPersona>(`${this.URL}admins/edit`,objetoControl);
  }

  eliminarPersona(id_persona: number): Observable<any> {
    return this.http.delete(`${this.URL}admins/delete/${id_persona}`);
  }




//------------------------------------------------------------------------//
 //Registros de voluntarios
 getsrvoluntarios(): Observable<Rpersonas> {
  return this.http.get<Rpersonas>(`${this.URL}volunts/consult`);
}

getrvoluntario(id_persona: number): Observable<Rpersonas> {
  return this.http.get<Rpersonas>(`${this.URL}volunts/consult/${id_persona}`);
}

agregarRVoluntario(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}volunts/agreg`,objetoControl);
}

editarVoluntario(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}volunts/edit`,objetoControl);
}

eliminarVoluntario(id_persona: number): Observable<any> {
  return this.http.delete(`${this.URL}volunts/delete/${id_persona}`);
}


//------------------------------------------------------------------------//
 //Registros de medicos DE PERROS

 getsRegistrosmedicosperros(): Observable<Rmedicosperros> {
  return this.http.get<Rmedicosperros>(`${this.URL}rmedicosperros/consult`);
}

getRegistromedicoperro(id_dato_medico: number): Observable<Rmedicosperros> {
  return this.http.get<Rmedicosperros>(`${this.URL}rmedicosperros/consult/${id_dato_medico}`);
}

agregRegistromedicosperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}rmedicosperros/agreg`,objetoControl);
}

editarRegistromedicosperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}rmedicosperros/edit`,objetoControl);
}

eliminarRegistromedicosperro(id_persona: number): Observable<any> {
  return this.http.delete(`${this.URL}rmedicosperros/delete/${id_persona}`);
}
//----------------------------------------------------------------//

 //Registros de medicos DE GATOS

 getsRegistrosmedicosgatos(): Observable<Rmedicosperros> {
  return this.http.get<Rmedicosperros>(`${this.URL}rmedicosgatos/consult`);
}

getRegistromedicogato(id_dato_medico: number): Observable<Rmedicosperros> {
  return this.http.get<Rmedicosperros>(`${this.URL}rmedicosgatos/consult/${id_dato_medico}`);
}

agregRegistromedicosgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}rmedicosgatos/agreg`,objetoControl);
}

editarRegistromedicosgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}rmedicosgatos/edit`,objetoControl);
}

eliminarRegistromedicosgato(id_persona: number): Observable<any> {
  return this.http.delete(`${this.URL}rmedicosgatos/delete/${id_persona}`);
}
//----------------------------------------------------------------//


 //Registros de alimentacion de perros

 getsAlimentacionperros(): Observable<Ralimentacion> {
  return this.http.get<Ralimentacion>(`${this.URL}alimperros/consult`);
}

getAlimentacionperro(fecha: string): Observable<Ralimentacion> {
  return this.http.get<Ralimentacion>(`${this.URL}alimperros/consult/${fecha}`);
}

agregAlimentacionperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}alimperros/agreg`,objetoControl);
}

editarAlimentacionperro(objetoControl: any, fecha:string): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}alimperros/edit/${fecha}`,objetoControl);
}

eliminarAlimentacionperro(fecha: string): Observable<any> {
  return this.http.delete(`${this.URL}alimperros/delete/${fecha}`);
}
//----------------------------------------------------------------//

 //Registros de alimentacion de perros

 getsAlimentaciongatos(): Observable<Ralimentacion> {
  return this.http.get<Ralimentacion>(`${this.URL}alimgatos/consult`);
}

getAlimentaciongato(fecha: string): Observable<Ralimentacion> {
  return this.http.get<Ralimentacion>(`${this.URL}alimgatos/consult/${fecha}`);
}

agregAlimentaciongato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}alimgatos/agreg`,objetoControl);
}

editarAlimentaciongato(objetoControl: any, fecha:string): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}alimgatos/edit/${fecha}`,objetoControl);
}

eliminarAlimentaciongato(fecha: string): Observable<any> {
  return this.http.delete(`${this.URL}alimgatos/delete/${fecha}`);
}
//----------------------------------------------------------------//

 //Registros de comida entrada de perros

 getsCCperros(): Observable<RCCanimales> {
  return this.http.get<RCCanimales>(`${this.URL}CCperros/consult`);
}

getCCperro(id: number): Observable<RCCanimales> {
  return this.http.get<RCCanimales>(`${this.URL}CCperros/consult/${id}`);
}

agregCCperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}CCperros/agreg`,objetoControl);
}

editarCCperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}CCperros/edit`,objetoControl);
}

eliminarCCperro(id: number): Observable<any> {
  return this.http.delete(`${this.URL}CCperros/delete/${id}`);
}
//----------------------------------------------------------------//

 //Registros de comida entrada de perros

 getsCCgatos(): Observable<RCCanimales> {
  return this.http.get<RCCanimales>(`${this.URL}CCgatos/consult`);
}

getCCgato(id: number): Observable<RCCanimales> {
  return this.http.get<RCCanimales>(`${this.URL}CCgatos/consult/${id}`);
}

agregCCgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}CCgatos/agreg`,objetoControl);
}

editarCCgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}CCgatos/edit`,objetoControl);
}

eliminarCCgato(id: number): Observable<any> {
  return this.http.delete(`${this.URL}CCgatos/delete/${id}`);
}
//----------------------------------------------------------------//

 //Registros de comida entrada de perros

 getsRperros(): Observable<Rperros> {
  return this.http.get<Rperros>(`${this.URL}rperros/consult`);
}

getRperro(id: number): Observable<Rperros> {
  return this.http.get<Rperros>(`${this.URL}rperros/consult/${id}`);
}

agregRperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}rperros/agreg`,objetoControl);
}

editarRperro(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}rperros/edit`,objetoControl);
}

eliminarRperro(id: number): Observable<any> {
  return this.http.delete(`${this.URL}rperros/delete/${id}`);
}
//----------------------------------------------------------------//

 //Registros de comida entrada de perros

 getsRgatos(): Observable<Rperros> {
  return this.http.get<Rperros>(`${this.URL}rgatos/consult`);
}

getRgato(id: number): Observable<Rperros> {
  return this.http.get<Rperros>(`${this.URL}rgatos/consult/${id}`);
}

agregRgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.post<RespuestaEditPersona>(`${this.URL}rgatos/agreg`,objetoControl);
}

editarRgato(objetoControl: any): Observable<RespuestaEditPersona> {
  return this.http.put<RespuestaEditPersona>(`${this.URL}rgatos/edit`,objetoControl);
}

eliminarRgato(id: number): Observable<any> {
  return this.http.delete(`${this.URL}rgatos/delete/${id}`);
}
//----------------------------------------------------------------//





  //Registros de animales
  getsranimalesp(): Observable<Ranimales> {
    return this.http.get<Ranimales>(`${this.URL}rperros/consult`);
  }

  getsranimalesg(): Observable<Ranimales> {
    return this.http.get<Ranimales>(`${this.URL}rgatos/consult`);
  }


}