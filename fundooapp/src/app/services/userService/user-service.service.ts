import { Injectable } from '@angular/core';
import {HttpServiceService} from '../../services/httpService/http-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }
  register(data) {
    
    return this.httpService.post('user/userSignUp', data);
}
  login(data){
    
    return this.httpService.post('user/login', data);
  }
  addNotes(data) {
    
    return this.httpService.post('notes/addNotes', data);
  }
   getAllUserNotes() {
    
     return this.httpService.get('/notes/getNotesList');
   }
   delete(id) {
   
     return this.httpService.post('/notes/trashNotes', id);
   }
   getAllDeletedNotes() {
   
    return this.httpService.get('/notes/getTrashNotesList');
  }
  archive(note)
  {
    
    return this.httpService.post('/notes/archiveNotes', note);
  }
  update(note) {
   
    return this.httpService.post('/notes/updateNotes', note);
  }
  changeColor(note) {
    
    return this.httpService.post('/notes/changesColorNotes', note);
  }
  createLabel(label) {
   
    return this.httpService.post('/noteLabels', label);
  }
  getAllLabels() {
   
    return this.httpService.get('/noteLabels/getNoteLabelList');
  }
  deleteLabel(id) {
  
   return this.httpService.delete('/noteLabels/' + id + '/deleteNoteLabel');
  }
updateLabel(id, label) {
  
  return this.httpService.post('/noteLabels/' + id + '/updateNoteLabel', label);
}
getAllArchivedNotes() {
  
  return this.httpService.get('/notes/getArchiveNotesList');
}
addReminder(reminder){
 
  return this.httpService.post('/notes/addUpdateReminderNotes',reminder);
}
getAllReminders(){
  
  return this.httpService.get('/notes/getReminderNotesList');
}
removeReminder(reminderModel){

  return this.httpService.post('/notes/removeReminderNotes',reminderModel);
}
deleteForeverNotes(note){

  return this.httpService.post('/notes/deleteForeverNotes',note);
}
addImage(image){
 
  return this.httpService.post('/user/uploadProfileImage',image);
}
searchUser(word){
 return this.httpService.post('/user/searchUserList',word);
}
}


