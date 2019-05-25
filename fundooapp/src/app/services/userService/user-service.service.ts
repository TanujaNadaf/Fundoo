import { Injectable } from '@angular/core';
import{HttpServiceService} from '../../services/httpService/http-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
  register(data) {
    console.log("In register service");
  //  localStorage.setItem('token',data); 
    return this.httpService.post('user/userSignUp',data);
}
  login(data){
    console.log("In Login Service");
    return this.httpService.post('user/login',data);
  }
}
