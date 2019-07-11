import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from "../services/data.service";
import { UserServiceService } from '../services/userService/user-service.service';
import { FormControl } from '@angular/forms';



//import {UpdateNotes} from '../models/updateNotesModel';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public card:Object;
 public title:string;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, public data: DataService,
     private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public note) {
    
   this.title=note.title;
    this.description.setValue(note.description);
    console.log("Note title is",note.title)
   this.card = note;
   console.log("In Constructor aaaaaaa",note);

  }
  
  description = new FormControl();
  ngOnInit() {

  }

  updateNotes(card) {
    console.log("in update notes");
    const note = {
      'title': this.title,
      'description': this.description.value,
      'noteId': this.card['id']
    }
   console.log(card);
    console.log(note);
    this.userService.update(note).subscribe(response => {
      console.log("Response to update", response);
      this.data.sendData(note);
    }, error => {
      console.log("Error in updating", error);
    })

  }
  onNoClick():
    void {
    this.dialogRef.close();
  }

}

