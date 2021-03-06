import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DataService } from '../../services/data.service';
import { UserServiceService } from '../../services/userService/user-service.service';
import { text } from '@angular/core/src/render3';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { UpdatenoteslabelComponent } from '../updatenoteslabel/updatenoteslabel.component';

export interface DisplayData{
  title:string;
  description:string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() allCards = [];
  @Input() text;
  public reminderarray = [];
  public result=[];
  public questionasked:number=0;
  public show:Boolean=false;
  public time:string
  public cards=[];
  public  toggle = false;
  @Output() Event = new EventEmitter<any>()
  private today = new Date();
   private tomorrow = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1)
  
  constructor(public dialog: MatDialog, public data: DataService, private userService: UserServiceService,private snackBar: MatSnackBar) {
    
  }
  
  ngOnInit() {
    this.getGrid();
  }

  openDialog(card): void {
    console.log("In open dialog");
    this.dialog.open(DialogComponent, {
      data: card
    })

  }
  eventOccur() {
    this.Event.emit();
  }
 
  removeReminder(id,reminder){
    
    const remindermodel={
      noteIdList: [id]
      
    }
  this.userService.removeReminder(remindermodel).subscribe(response=>{
    console.log("Response to deleting reminder",response);
    this.snackBar.open('Reminder Deleted', 'Undo', {
      duration: 3000,
    })

    this.Event.emit();
  },error=>{
     console.log("Error in deleting reminder",error);
  })
}
remiderCutOff(cuttOff) {
  var currentReminderTime = new Date().getTime();
   var timeValue = new Date(cuttOff).getTime();
 
  if (timeValue > currentReminderTime) {
    return true;
  }
  else {
    return false;
  }
} 
removeLabelNote(noteId,labelId,label){
  this.userService.removeNoteLabel(noteId,labelId,label).subscribe(response=>{
    console.log("Response to deleting notes label",response);
    this.snackBar.open('Reminder Deleted', 'Undo', {
      duration: 3000,
    })

    this.Event.emit();
  },error=>{
     console.log("Error in deleting notes label",error);
  })
}
openUpdateNotesLabel(labelDetails){
  console.log("In update notes label")
  this.dialog.open(UpdatenoteslabelComponent,{
   width:'600px',
   data:labelDetails
  })
}
showQuestion(){
  this.questionasked=1;
}
getGrid() {
  this.data.currentGridEvent.subscribe(message => {
    this.toggle = message;
  })
}
}


