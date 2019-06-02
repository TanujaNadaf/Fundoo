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
  addNotes(data){
    console.log("In addNotes service");
    return this.httpService.post('notes/addNotes',data);
  }
   getAllUserNotes(){
     console.log("In get user service");
     return this.httpService.get('/notes/getNotesList');
   }
   delete(id){
     console.log("In delete function");
     return this.httpService.post('/notes/trashNotes',id);
   }
   getAllDeletedNotes (){
    console.log("In get deleted notes service");
    return this.httpService.get('/notes/getTrashNotesList');
  }
  }
