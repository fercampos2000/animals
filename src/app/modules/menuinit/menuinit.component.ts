import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'app/services/auth/login.service';

@Component({
  selector: 'app-menuinit',
  templateUrl: './menuinit.component.html',
  styleUrls: ['./menuinit.component.scss']
})
export class MenuinitComponent implements OnInit, OnDestroy {
    userLoginOn: boolean = false;
    constructor(private loginService:LoginService){ }

    ngOnDestroy(): void {
        this.loginService.currentUserData.unsubscribe();
        this.loginService.currentUserLoginOn.unsubscribe();
    }

    ngOnInit(): void {
      this.loginService.currentUserLoginOn.subscribe(
        {
          next:(userLoginOn) => {
            this.userLoginOn=userLoginOn;
        }
      }
    )
  }
}
