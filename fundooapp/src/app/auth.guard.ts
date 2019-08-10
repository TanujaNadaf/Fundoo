import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpServiceService } from './services/httpService/http-service.service';
import{Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private httpService:HttpServiceService,private router:Router){}
  canActivate():boolean{
    if(this.httpService.loggedIn()){
     return true;
    }else{
      this.router.navigate(['login']);
     return false;
    }
  }
}
