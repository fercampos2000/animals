import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Rlogin } from '@shared/models/rpersonasModel';
import { Observable } from 'rxjs';
import { RestsService } from '@shared/services/rests.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  //constructor(private router:Router, private authService : RestsService){
  constructor(private cookieService: CookieService, private router:Router){

  }

  redirect(flag: boolean): any{
    if(!flag){	
      this.router.navigate(['/','login'])
    }

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    const cookie = this.cookieService.check('token_access');
    this.redirect(cookie)
   
   /* const storedData = localStorage.getItem('responseLogin');
    if (storedData !== null) {
          const infoToken: Rlogin = JSON.parse(storedData);
    }
    if(!this.authService.isAuth()){

      console.log('Token Invalido o ya expiro')
      this.router.navigate(['login'])
      return false;
    }*/
    console.log(cookie);
        return cookie;
  }
}
