import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorComponent} from '../../components/collaborator/collaborator.component'






@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() cards;
  @Input() deletedCard;
  public show = true;
 public  hide=false;
 public peek:Boolean;
  public colorArray = [[], [], []];
  public date: Date
  public firstDate: Date
  public secondDate: Date
  public thirdDate:Date
  reminderBody = {
    'date': new FormControl(new Date()),
    'time': ''
  }
  ngOnInit() {
    this.colorArray = [
      [{ color: '#ffffff' }, { color: '#FA8072' }, { color: '#FFA500' }, { color: '#FFFF00' }],
      [{ color: '#98FB98' }, { color: '#AFEEEE' }, { color: '#ADD8E6' }, { color: '#87CEFA' }],
      [{ color: '#DDA0DD' }, { color: '#FFC0CB' }, { color: '#DEB887' }, { color: '#DCDCDC' }]
    ]
    

  }

  @Output() Event = new EventEmitter<any>()

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar,public dialog: MatDialog) { }
  myControl = new FormControl();
  options = [
    { name: 'Morning', time: '8:00 AM' },
    { name: 'Afternoon', time: '1:00 PM' },
    { name: 'Evening', time: '6:00 PM' },
    { name: 'Night', time: '8:00 PM' }
  ]
  instance = [
    { name: 'Does not repeat' },
    { name: 'Daily' },
    { name: 'weekly' },
    { name: 'Monthly' },
    { name: 'Yearly' },
    { name: 'Custom' }
  ]

  deleteNote() {
    
    const note = {
      'noteIdList': [this.cards['id']],
      'isDeleted': true

    }
    this.userService.delete(note).subscribe(data => {

      console.log("Response in Delete", data);
      this.Event.emit();
      this.snackBar.open('Note Trashed', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in deleting", error);
    })


  }
  deleteForever(){
    
    const note = {
      'noteIdList': [this.deletedCard['id']],
      'isDeleted': true

    }
   
    this.userService.deleteForeverNotes(note).subscribe(data => {

      console.log("Response to delete forever notes", data);
      this.Event.emit();
      this.snackBar.open('Note Deleted Permanently', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in deleting the notes permanently", error);
    })

  }
  archiveNote() {
   
    const note = {
      'noteIdList': [this.cards['id']],
      'isArchived': true,
    }
    this.userService.archive(note).subscribe(data => {

      console.log("Response in achive", data);
      this.Event.emit();
      this.snackBar.open('Note Archived', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in archiving", error);
    }
    )
  }
  changeColor(code, cards) {
   
    const note = {
      'noteIdList': [this.cards['id']],
      'color': code
    }
   
    this.userService.changeColor(note).subscribe(response => {
      console.log("Response to change color", response);
      this.Event.emit();
    }, error => {
      console.log("Error in changing color", error);
    })
  }
  remindMeToday() {
   
    let date = new Date();
    var time=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    
    this.firstDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0, 0, 0);
    

    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.firstDate]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.Event.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
  }
  remindMeTomorrow() {
    console.log("In remind me tomorrow function");
    let date = new Date();
    
    this.secondDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 8, 0, 0, 0)
    
    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.secondDate]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.Event.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
  }
remindNextWeek(){

let date = new Date();
    
    this.thirdDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7, 8, 0, 0, 0)
   
    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.thirdDate]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.Event.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
}
saveReminder(date,time){
 ;
  if (time== '8:00 AM') {
    const body = {
      "noteIdList": [this.cards.id],
      "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
  console.log("Response to add reminder", response);
  this.Event.emit();
}, error => {
  console.log("Error in adding reminder", error);
})
}
if (time== '1:00 PM') {
  const body = {
    "noteIdList": [this.cards.id],
    "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 0, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
console.log("Response to add reminder", response);
this.Event.emit();
}, error => {
console.log("Error in adding reminder", error);
})
}
if (time== '6:00 PM') {
  const body = {
    "noteIdList": [this.cards.id],
    "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 0, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
console.log("Response to add reminder", response);
this.Event.emit();
}, error => {
console.log("Error in adding reminder", error);
})
}
if (time== '8:00 PM') {
  const body = {
    "noteIdList": [this.cards.id],
    "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
console.log("Response to add reminder", response);
this.Event.emit();
}, error => {
console.log("Error in adding reminder", error);
})
}
else if (time == this.reminderBody.time) {
  var splitTime = this.reminderBody.time.split("", 8);

  var hour = Number(splitTime[0] + splitTime[1]);
  var minute = Number(splitTime[3] + splitTime[4]);
  var ampm = (splitTime[6] + splitTime[7]);
  if (ampm == 'AM' || ampm == 'am') {
    const body = {
      "noteIdList": [this.cards.id],
      "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
  console.log("Response to add reminder", response);
  this.Event.emit();
  }, error => {
  console.log("Error in adding reminder", error);
  })
  }
  if (ampm == 'PM' || ampm == 'pm') {
    const body = {
      "noteIdList": [this.cards.id],
      "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour+12, minute, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
  console.log("Response to add reminder", response);
  this.Event.emit();
  }, error => {
  console.log("Error in adding reminder", error);
  })
  }

}
}
openCollaboratorDialog():void {
    const dialogRefPic = this.dialog.open(CollaboratorComponent, {
      width: '600px',
      data: this.cards
    });
}
}
