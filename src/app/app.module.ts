import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './modules/login/login.component';
import { MenuinitComponent } from './modules/menuinit/menuinit.component';
import { Login2Component } from './modules/login2/login2.component';
import { RpersonalComponent } from './modules/regispersonas/rpersonal/rpersonal.component';
import { RvoluntariosComponent } from './modules/regispersonas/rvoluntarios/rvoluntarios.component';
import { RperrosComponent } from './modules/regisanimales/rperros/rperros.component';
import { RgatosComponent } from './modules/regisanimales/rgatos/rgatos.component';
import { AlimgatosComponent } from './modules/alimentacion/alimgatos/alimgatos.component';
import { AlimperrosComponent } from './modules/alimentacion/alimperros/alimperros.component';
import { ContcomidgatosComponent } from './modules/contcomida/contcomidgatos/contcomidgatos.component';
import { ContcomidperrosComponent } from './modules/contcomida/contcomidperros/contcomidperros.component';
import { AdopperrosComponent } from './modules/adopcion/adopperros/adopperros.component';
import { AdopgatosComponent } from './modules/adopcion/adopgatos/adopgatos.component';
import { HttpClientModule } from '@angular/common/http';
import { RpersonalagregarComponent } from './modules/regispersonas/rpersonal/rpersonalagregar/rpersonalagregar.component';
import { RpersonaleditarComponent } from './modules/regispersonas/rpersonal/rpersonaleditar/rpersonaleditar.component';
import { RvoluntariosagregarComponent } from './modules/regispersonas/rvoluntarios/rvoluntariosagregar/rvoluntariosagregar.component';
import { RvoluntarioseditarComponent } from './modules/regispersonas/rvoluntarios/rvoluntarioseditar/rvoluntarioseditar.component';
import { RperrosagregarComponent } from './modules/regisanimales/rperros/rperrosagregar/rperrosagregar.component';
import { RperroseditarComponent } from './modules/regisanimales/rperros/rperroseditar/rperroseditar.component';
import { RgatosagregarComponent } from './modules/regisanimales/rgatos/rgatosagregar/rgatosagregar.component';
import { RgatoseditarComponent } from './modules/regisanimales/rgatos/rgatoseditar/rgatoseditar.component';
import { AlimperrosagregarComponent } from './modules/alimentacion/alimperros/alimperrosagregar/alimperrosagregar.component';
import { AlimperroseditarComponent } from './modules/alimentacion/alimperros/alimperroseditar/alimperroseditar.component';
import { AlimgatosagregarComponent } from './modules/alimentacion/alimgatos/alimgatosagregar/alimgatosagregar.component';
import { AlimgatoseditarComponent } from './modules/alimentacion/alimgatos/alimgatoseditar/alimgatoseditar.component';
import { RmedicosperrosComponent } from './modules/rmedicos/rmedicosperros/rmedicosperros.component';
import { RmedicosgatosComponent } from './modules/rmedicos/rmedicosgatos/rmedicosgatos.component';
import { RmedicosperrosagregarComponent } from './modules/rmedicos/rmedicosperros/rmedicosperrosagregar/rmedicosperrosagregar.component';
import { RmedicosperroseditarComponent } from './modules/rmedicos/rmedicosperros/rmedicosperroseditar/rmedicosperroseditar.component';
import { RmedicosgatosagregarComponent } from './modules/rmedicos/rmedicosgatos/rmedicosgatosagregar/rmedicosgatosagregar.component';
import { RmedicosgatoseditarComponent } from './modules/rmedicos/rmedicosgatos/rmedicosgatoseditar/rmedicosgatoseditar.component';
import { ContcomidperrosagregarComponent } from './modules/contcomida/contcomidperros/contcomidperrosagregar/contcomidperrosagregar.component';
import { ContcomidperroslistarComponent } from './modules/contcomida/contcomidperros/contcomidperroslistar/contcomidperroslistar.component';
import { ContcomidgatosagregarComponent } from './modules/contcomida/contcomidgatos/contcomidgatosagregar/contcomidgatosagregar.component';
import { ContcomidgatoslistarComponent } from './modules/contcomida/contcomidgatos/contcomidgatoslistar/contcomidgatoslistar.component';
import { ContcomidgatoseditarComponent } from './modules/contcomida/contcomidgatos/contcomidgatoseditar/contcomidgatoseditar.component';
import { ContcomidperroseditarComponent } from './modules/contcomida/contcomidperros/contcomidperroseditar/contcomidperroseditar.component';
import { AlimperrosmostrarComponent } from './modules/alimentacion/alimperros/alimperrosmostrar/alimperrosmostrar.component';
import { AlimgatosmostrarComponent } from './modules/alimentacion/alimgatos/alimgatosmostrar/alimgatosmostrar.component';


import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
//import { AlimperrosMostrarComponent } from './modules/alimentacion/alimperros/alimperros-mostrar/alimperros-mostrar.component';
//import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuinitComponent,
    Login2Component,
    RpersonalComponent,
    RvoluntariosComponent,
    RperrosComponent,
    RgatosComponent,
    AlimgatosComponent,
    AlimperrosComponent,
    ContcomidgatosComponent,
    ContcomidperrosComponent,
    AdopperrosComponent,
    AdopgatosComponent,
    RpersonalagregarComponent,
    RpersonaleditarComponent,
    RvoluntariosagregarComponent,
    RvoluntarioseditarComponent,
    RperrosagregarComponent,
    RperroseditarComponent,
    RgatosagregarComponent,
    RgatoseditarComponent,
    AlimperrosagregarComponent,
    AlimperroseditarComponent,
    AlimgatosagregarComponent,
    AlimgatoseditarComponent,
    RmedicosperrosComponent,
    RmedicosgatosComponent,
    RmedicosperrosagregarComponent,
    RmedicosperroseditarComponent,
    RmedicosgatosagregarComponent,
    RmedicosgatoseditarComponent,
    ContcomidperrosagregarComponent,
    ContcomidperroslistarComponent,
    ContcomidgatosagregarComponent,
    ContcomidgatoslistarComponent,
    ContcomidgatoseditarComponent,
    ContcomidperroseditarComponent,
    AlimperrosmostrarComponent,
    AlimgatosmostrarComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //routing,
    //modulo de core
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
