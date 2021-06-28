import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenStorageService } from '../Services/Authentication/token-storage.service';
import { AuthService } from '../Services/Authentication/auth.service';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    private token: TokenStorageService
    ) { }

  canActivate(): boolean {
      const user = window.sessionStorage.getItem(USER_KEY);
      const AdminCheck = JSON.parse(user);
      if (AdminCheck.roles[0] == 'ROLES_ADMIN'){
        return true;
      }else{
          this.router.navigateByUrl('/home');
          console.log('test',user);
          return false;
      }

    }
}
