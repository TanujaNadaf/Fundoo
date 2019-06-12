import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() cards;
  //array = [[], [], []];
  colorArray = [[],[],[]];

  ngOnInit() {
    this.colorArray = [
      [{color:'#ffffff'},{color:'#FA8072'},{color:'#FFA500'},{color:'#FFFF00'}],
      [{color:'#98FB98'},{color:'#AFEEEE'},{color:'#ADD8E6'},{color:'#87CEFA'}],
      [{color:'#DDA0DD'},{color:'#FFC0CB'},{color:'#DEB887'},{color:'#DCDCDC'}]
    ]
    console.log('colorArray  ', this.colorArray);

  }

  @Output() messageEvent =new EventEmitter<any>()

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar) { }

  deleteNote() {
    console.log(this.cards);
    const note = {
      'noteIdList': [this.cards['id']],
      'isDeleted': true

    }
    this.userService.delete(note).subscribe(data => {

      console.log("Response in Delete", data);
      this.messageEvent.emit();
      this.snackBar.open('Note Trashed', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in deleting", error);
    })
  

  }
  archiveNote() {
    console.log("In archive");
    const note = {
      'noteIdList': [this.cards['id']],
      'isArchived': true,
    }
    this.userService.archive(note).subscribe(data => {

      console.log("Response in achive", data);
      this.messageEvent.emit();
      this.snackBar.open('Note Archived', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in archiving", error);
    }
    )
  }
  changeColor(code,cards){
    console.log("In change color");
    console.log(cards);
    const note={
      'noteIdList': [this.cards['id']],
      'color': code
    }
    console.log(note);
    this.userService.changeColor(note).subscribe(response=>{
      console.log("Response to change color",response);
      this.messageEvent.emit();
    },error=>{
      console.log("Error in changing color",error);
    })
  }

}

