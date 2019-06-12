import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from "../services/data.service";
import { UserServiceService } from '../services/userService/user-service.service';
import { FormControl } from '@angular/forms';
import { DialogData } from '../components/display/display.component';


//import {UpdateNotes} from '../models/updateNotesModel';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  card: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, public data: DataService,
     private userService: UserServiceService, @Inject(MAT_DIALOG_DATA) public note: DialogData) {
    //console.log(note);
    this.title.setValue(note.title);
    this.description.setValue(note.description);
    this.card = note;
    console.log(this.card);

  }
  title = new FormControl();
  description = new FormControl();
  ngOnInit() {

  }

  updateNotes(card) {
    console.log("in update notes");
    const note = {
      'title': this.title.value,
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

