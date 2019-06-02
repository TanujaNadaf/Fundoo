import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {UserServiceService} from '../../services/userService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() cards: string;
 
 

  constructor(private userService:UserServiceService,private snackBar:MatSnackBar) { }
  deleteNote(){
    console.log(this.cards);
    const note ={
      'noteIdList': [this.cards['id']],
      'isDeleted': true,
      
    }
    this.userService.delete(note).subscribe(data=>{
     
      console.log("Response in Delete",data);
      this.snackBar.open('Note Trashed' ,'Undo',{
        duration: 3000,
      })
      
    },error=>{
      console.log("error in deleting",error);
    }
    )
  
  }
  
 

}
