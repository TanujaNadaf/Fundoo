import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userService/user-service.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.scss']
})
export class QuestionanswerComponent implements OnInit {
  
public Details:string[];
public noteDetails=[];
private url=this.router.url;
public editorContent:string;
public show:Boolean=true;
public firstName:string;
public lastName:string;
public email:string;
public question;
public hide:Boolean;
public messageArray=[];
public userDetails:Object;
public count:number;
public liked:number;
public lykC:number;

  constructor(private router:Router,private userService:UserServiceService) { }
  
  ngOnInit() {
   this.Details=this.url.split('/')
   console.log("Note Details",this.Details)
   this.getNotesDetail(this.Details[3]);
  
  }
  public image2 = localStorage.getItem('imageUrl');
  public img = environment.apiUrl + this.image2;
  public date=new Date();
  public today=this.date;

getNotesDetail(noteId){
  this.userService.getNotesDetail(noteId).subscribe(response=>{
    console.log("Response to get notes detail",response);
    this.noteDetails=response['data']['data'][0];
    console.log(this.noteDetails);
    this.messageArray=this.noteDetails['questionAndAnswerNotes'];
    console.log("Message array is",this.messageArray)
    this.userDetails=this.messageArray[0];
  },error=>{
    console.log("Error in getting notes detail",error);
  })
}
addQuestionandAnswer(){
  console.log(this.editorContent)
  const questionData={
    message:this.editorContent,
    notesId:this.Details[3]
  }
  this.userService.addQuestionandAnswer(questionData).subscribe(response=>{
    console.log("Response to add question and answer",response)
    this.question=response['data']['details'];
    this.getNotesDetail(this.Details[3])
    console.log(this.question);
  },error=>{
    console.log("Error in adding question and answer",error)
  })
}
likedQuestion(id,flag){
const data={
  "like":flag
}
this.userService.likedQuestion(id,data).subscribe(response=>{
  console.log("Response to liked question",response)
  this.count=response['data']['details'].count
  this.getNotesDetail(this.Details[3])
},error=>{
  console.log("Error to liked question",error)
})
}
isLiked(userQuestion){
this.liked=0;
for (let i = 0; i < userQuestion['like'].length; i++) {
  if (userQuestion.like[i].userId == localStorage.getItem('userId') && userQuestion.like[i].like == true) {
    this.liked = 1;
    return true;
  }
}
return true;
}

ratedQuestion(id,$event){
  console.log("rate is",$event);
  const data={
    "rate":$event
  }
this.userService.ratedQuestion(id,data).subscribe(response=>{
  console.log("Response to rate question",response)
  this.getNotesDetail(this.Details[3])
},error=>{
  console.log("Error to rate question",error)
})

}

}
