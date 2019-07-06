import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {AddNotes} from '../../models/addNotesModel';
import {UserServiceService} from '../../services/userService/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  cards;
  title;
  description;
  @Output() messageEvent =new EventEmitter<any>()
//addTitleFormControl=new FormControl('',[]);
//addDescriptionFormControl=new FormControl('',[]);
  constructor(private userService:UserServiceService) { }
  
  ngOnInit() {
    
  }
  show=false;
  addNotes(){
    //const addNotesModel=new AddNotes();
    console.log('in add notes');
     console.log('title in addnotes',this.title)
     console.log('description in addnotes',this.description)
     const note={
       "title":this.title,
       "description":this.description
     }
    
    
   
    this.userService.addNotes(note).subscribe(data=>{
      console.log("Response to Add",data);
      this.messageEvent.emit();
     
    },error=>{
      console.log("Error in Adding Notes",error);
    })
    
  }
    
  }

