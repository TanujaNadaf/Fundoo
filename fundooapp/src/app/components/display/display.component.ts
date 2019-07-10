import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DataService } from '../../services/data.service';
import { UserServiceService } from '../../services/userService/user-service.service';
import { text } from '@angular/core/src/render3';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface DialogData {
  title: string;
  description: string;
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
  
  
  public time:string
  public cards=[];
  
  @Output() Event = new EventEmitter<any>()
  private today = new Date();
   private tomorrow = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1)
  
  constructor(public dialog: MatDialog, public data: DataService, private userService: UserServiceService,private snackBar: MatSnackBar) {
    
  }
  
  ngOnInit() {
    
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
}

