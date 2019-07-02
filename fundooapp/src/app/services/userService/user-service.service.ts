import { Injectable } from '@angular/core';
import {HttpServiceService} from '../../services/httpService/http-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }
  register(data) {
    console.log('In register service');
  //  localStorage.setItem('token',data); 
    return this.httpService.post('user/userSignUp', data);
}
  login(data){
    console.log('In Login Service');
    return this.httpService.post('user/login', data);
  }
  addNotes(data) {
    console.log('In addNotes service');
    return this.httpService.post('notes/addNotes', data);
  }
   getAllUserNotes() {
     console.log('In get user service');
     return this.httpService.get('/notes/getNotesList');
   }
   delete(id) {
     console.log('In delete function');
     return this.httpService.post('/notes/trashNotes', id);
   }
   getAllDeletedNotes() {
    console.log('In get deleted notes service');
    return this.httpService.get('/notes/getTrashNotesList');
  }
  archive(note)
  {
    console.log('In delete function');
    return this.httpService.post('/notes/archiveNotes', note);
  }
  update(note) {
    console.log('In update notes service');
    return this.httpService.post('/notes/updateNotes', note);
  }
  changeColor(note) {
    console.log('In change color notes service');
    return this.httpService.post('/notes/changesColorNotes', note);
  }
  createLabel(label) {
    console.log('In create label user service');
    return this.httpService.post('/noteLabels', label);
  }
  getAllLabels() {
    console.log('In get all labels');
    return this.httpService.get('/noteLabels/getNoteLabelList');
  }
  deleteLabel(id) {
   console.log('In delete label user service');
   console.log(id);
   return this.httpService.delete('/noteLabels/' + id + '/deleteNoteLabel');
  }
updateLabel(id, label) {
  console.log('In update label function');
  return this.httpService.post('/noteLabels/' + id + '/updateNoteLabel', label);
}
getAllArchivedNotes() {
  console.log('In getting archived notes');
  return this.httpService.get('/notes/getArchiveNotesList');
}
addReminder(reminder){
  console.log('In add reminder service');
  return this.httpService.post('/notes/addUpdateReminderNotes',reminder);
}
getAllReminders(){
  console.log('In get all reminders user service');
  return this.httpService.get('/notes/getReminderNotesList');
}
removeReminder(reminderModel){
  console.log('In remove reminders user service');
  return this.httpService.post('/notes/removeReminderNotes',reminderModel);
}
deleteForeverNotes(note){
  console.log('In remove reminders user service');
  return this.httpService.post('/notes/deleteForeverNotes',note);
}
}


