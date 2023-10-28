import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MenuinitComponent } from './modules/menuinit/menuinit.component';
import { Login2Component } from './modules/login2/login2.component';
import { RpersonalComponent } from './modules/regispersonas/rpersonal/rpersonal.component';
import { RvoluntariosComponent } from './modules/regispersonas/rvoluntarios/rvoluntarios.component';
import { RgatosComponent } from './modules/regisanimales/rgatos/rgatos.component';
import { RperrosComponent } from './modules/regisanimales/rperros/rperros.component';

import { AlimgatosComponent } from './modules/alimentacion/alimgatos/alimgatos.component';
import { AlimperrosComponent } from './modules/alimentacion/alimperros/alimperros.component';

import { RmedicosgatosComponent } from './modules/rmedicos/rmedicosgatos/rmedicosgatos.component';
import { RmedicosperrosComponent } from './modules/rmedicos/rmedicosperros/rmedicosperros.component';

import { ContcomidgatosComponent } from './modules/contcomida/contcomidgatos/contcomidgatos.component';
import { ContcomidperrosComponent } from './modules/contcomida/contcomidperros/contcomidperros.component';
import { AdopperrosComponent } from './modules/adopcion/adopperros/adopperros.component';
import { AdopgatosComponent } from './modules/adopcion/adopgatos/adopgatos.component';

import { RpersonalagregarComponent } from '@modules/regispersonas/rpersonal/rpersonalagregar/rpersonalagregar.component';
import { RpersonaleditarComponent } from '@modules/regispersonas/rpersonal/rpersonaleditar/rpersonaleditar.component';

import { RvoluntariosagregarComponent } from '@modules/regispersonas/rvoluntarios/rvoluntariosagregar/rvoluntariosagregar.component';
import { RvoluntarioseditarComponent } from '@modules/regispersonas/rvoluntarios/rvoluntarioseditar/rvoluntarioseditar.component';

import { RperrosagregarComponent } from '@modules/regisanimales/rperros/rperrosagregar/rperrosagregar.component';
import { RperroseditarComponent } from '@modules/regisanimales/rperros/rperroseditar/rperroseditar.component';

import { RgatosagregarComponent } from '@modules/regisanimales/rgatos/rgatosagregar/rgatosagregar.component';
import { RgatoseditarComponent } from '@modules/regisanimales/rgatos/rgatoseditar/rgatoseditar.component';

import { AlimperrosagregarComponent } from '@modules/alimentacion/alimperros/alimperrosagregar/alimperrosagregar.component';
import { AlimperroseditarComponent} from '@modules/alimentacion/alimperros/alimperroseditar/alimperroseditar.component';

import { AlimgatosagregarComponent } from '@modules/alimentacion/alimgatos/alimgatosagregar/alimgatosagregar.component';
import { AlimgatoseditarComponent} from '@modules/alimentacion/alimgatos/alimgatoseditar/alimgatoseditar.component';

import { RmedicosperrosagregarComponent } from './modules/rmedicos/rmedicosperros/rmedicosperrosagregar/rmedicosperrosagregar.component';
import { RmedicosperroseditarComponent } from './modules/rmedicos/rmedicosperros/rmedicosperroseditar/rmedicosperroseditar.component';

import { RmedicosgatosagregarComponent } from '@modules/rmedicos/rmedicosgatos/rmedicosgatosagregar/rmedicosgatosagregar.component';
import { RmedicosgatoseditarComponent } from '@modules/rmedicos/rmedicosgatos/rmedicosgatoseditar/rmedicosgatoseditar.component';

import { ContcomidperrosagregarComponent } from '@modules/contcomida/contcomidperros/contcomidperrosagregar/contcomidperrosagregar.component';
import { ContcomidperroslistarComponent } from '@modules/contcomida/contcomidperros/contcomidperroslistar/contcomidperroslistar.component';
import { ContcomidperroseditarComponent } from '@modules/contcomida/contcomidperros/contcomidperroseditar/contcomidperroseditar.component';
import { ContcomidgatosagregarComponent } from '@modules/contcomida/contcomidgatos/contcomidgatosagregar/contcomidgatosagregar.component';
import { ContcomidgatoslistarComponent } from '@modules/contcomida/contcomidgatos/contcomidgatoslistar/contcomidgatoslistar.component';
import { ContcomidgatoseditarComponent } from '@modules/contcomida/contcomidgatos/contcomidgatoseditar/contcomidgatoseditar.component';

import { AlimperrosmostrarComponent } from '@modules/alimentacion/alimperros/alimperrosmostrar/alimperrosmostrar.component';
import { AlimgatosmostrarComponent } from '@modules/alimentacion/alimgatos/alimgatosmostrar/alimgatosmostrar.component';


import { MainGuard } from './guards/main.guard';
//const appRoutes = [{path:"login", component: LoginComponent, pathMatch:"full"}];
//export const routing = RouterModule.forRoot(appRoutes);

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'login2', component: Login2Component},
  {path:'menuinit', component: MenuinitComponent, canActivate:[MainGuard]},
  {path:'rgatos', component: RgatosComponent, canActivate:[MainGuard]},
  {path:'rperros', component: RperrosComponent, canActivate:[MainGuard]},
  {path:'alimgatos', component: AlimgatosComponent, canActivate:[MainGuard]},
  {path:'alimperros', component: AlimperrosComponent, canActivate:[MainGuard]},
  {path:'rmedicosgatos', component: RmedicosgatosComponent, canActivate:[MainGuard]},
  {path:'rmedicosperros', component: RmedicosperrosComponent, canActivate:[MainGuard]},
  {path:'contcomidgatos', component: ContcomidgatosComponent, canActivate:[MainGuard]},
  {path:'contcomidperros', component: ContcomidperrosComponent, canActivate:[MainGuard]},
  {path:'adopgatos', component: AdopgatosComponent, canActivate:[MainGuard]},
  {path:'adopperros', component: AdopperrosComponent, canActivate:[MainGuard]},
  {path:'rpersonal', component: RpersonalComponent, canActivate:[MainGuard]},
  {path:'rpersonalAgregar', component: RpersonalagregarComponent, canActivate:[MainGuard]},
  {path:'rpersonalEditar/:id_persona', component: RpersonaleditarComponent, canActivate:[MainGuard]},
  {path:'rvoluntarios', component: RvoluntariosComponent, canActivate:[MainGuard]},
  {path:'rvoluntariosAgregar', component: RvoluntariosagregarComponent, canActivate:[MainGuard]},
  {path:'rvoluntariosEditar/:id_voluntario', component: RvoluntarioseditarComponent, canActivate:[MainGuard]},
  {path:'rperrosAgregar', component: RperrosagregarComponent, canActivate:[MainGuard]},
  {path:'rperrosEditar/:id', component: RperroseditarComponent, canActivate:[MainGuard]},
  {path:'rgatosAgregar', component: RgatosagregarComponent, canActivate:[MainGuard]},
  {path:'rgatosEditar/:id', component: RgatoseditarComponent, canActivate:[MainGuard]},
  {path:'alimperrosAgregar', component: AlimperrosagregarComponent, canActivate:[MainGuard]},
  {path:'alimperrosEditar/:fecha', component: AlimperroseditarComponent, canActivate:[MainGuard]},
  {path:'alimgatosAgregar', component: AlimgatosagregarComponent, canActivate:[MainGuard]},
  {path:'alimgatosEditar/:fecha', component: AlimgatoseditarComponent, canActivate:[MainGuard]},

  {path:'rmedicosperrosAgregar', component: RmedicosperrosagregarComponent, canActivate:[MainGuard]},
  {path:'rmedicosperrosEditar/:id_rmedicoperro', component: RmedicosperroseditarComponent, canActivate:[MainGuard]},
  {path:'rmedicosgatosAgregar', component: RmedicosgatosagregarComponent, canActivate:[MainGuard]},
  {path:'rmedicosgatosEditar/:id_rmedicogato', component: RmedicosgatoseditarComponent, canActivate:[MainGuard]},

  {path:'contcomidperrosAgregar', component: ContcomidperrosagregarComponent, canActivate:[MainGuard]},
  {path:'contcomidperrosLista', component: ContcomidperroslistarComponent, canActivate:[MainGuard]},
  {path:'contcomidperrosEditar/:id', component: ContcomidperroseditarComponent, canActivate:[MainGuard]},
  {path:'contcomidgatosAgregar', component: ContcomidgatosagregarComponent, canActivate:[MainGuard]},
  {path:'contcomidgatosLista', component: ContcomidgatoslistarComponent, canActivate:[MainGuard]},
  {path:'contcomidgatosEditar/:id', component: ContcomidgatoseditarComponent, canActivate:[MainGuard]},

  {path:'alimperrosMostrar', component: AlimperrosmostrarComponent, canActivate:[MainGuard]},
  {path:'alimgatosMostrar', component: AlimgatosmostrarComponent, canActivate:[MainGuard]},
  
  {path:'**', pathMatch: 'full' ,redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
