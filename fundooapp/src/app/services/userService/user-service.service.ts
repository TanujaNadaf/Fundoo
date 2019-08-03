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
addCollaborator(noteId,collaboratorDetails){
  return this.httpService.post('/notes/' + noteId + '/AddcollaboratorsNotes',collaboratorDetails);
}
removeCollaborator(noteId,collabId){
  return this.httpService.delete('/notes/' + noteId + '/removeCollaboratorsNotes/'+ collabId);
}
addLabelsToNotes(noteId,labelId,label){
  return this.httpService.post('/notes/' + noteId + '/addLabelToNotes/' + labelId +'/add',label);
}
getNotesByLabelName(labelName){
  return this.httpService.post('/notes/getNotesListByLabel/'+labelName,{});
}
removeNoteLabel(noteId,labelId,label){
  return this.httpService.post("/notes/" + noteId + "/addLabelToNotes/" + labelId + "/remove", label);
}
updateLabelofNotes(id,labelDetails){
  return this.httpService.post('/noteLabels/' + id + '/updateNoteLabel', labelDetails);
}
getNotesDetail(noteId){
  return this.httpService.get('/notes/getNotesDetail/'+noteId)
}
addQuestionandAnswer(questionData){
  return this.httpService.post('/questionAndAnswerNotes/addQuestionAndAnswer',questionData)
}
likedQuestion(id,data){
  return this.httpService.post('/questionAndAnswerNotes/like/'+id,data)
}
ratedQuestion(id,rate){
  return this.httpService.post('/questionAndAnswerNotes/rate/'+id,rate)
}
logout(body){
  return this.httpService.post('/user/logout',body)
}
questionAnswerReply(id,replyData){
  return this.httpService.post('/questionAndAnswerNotes/reply/'+id,replyData)
}
getUserService(){
  return this.httpService.get('user/service')
}
addToCart(serviceId){
  return this.httpService.post('/productcarts/addToCart',serviceId)
}
getProductCart(){
  return this.httpService.get('/productcarts/myCart')
}
placeOrder(orderDetails){
  return this.httpService.post('/productCarts/placeOrder',orderDetails);
}
completeOrder(cartId){
  return this.httpService.post('/productcarts/adminCompleteOrder',cartId);
}
}


