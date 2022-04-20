import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(protected router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      try{
        let token = localStorage.getItem('token');
        if(token){
          return true;
        }
        
        this.logout();
        return false;
      }catch(error){
        this.logout();
        return false
      }
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/auth/login"]);
    return false;
  }
  
}
