import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() cards;
  @Input() deletedCard;
  show = true;
  hide=false;
  //array = [[], [], []];
  colorArray = [[], [], []];
  date: any;
  date1: any;
  date2: any;
  date3:any;
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
    console.log('colorArray  ', this.colorArray);

  }

  @Output() messageEvent = new EventEmitter<any>()

  constructor(private userService: UserServiceService, private snackBar: MatSnackBar) { }
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
  deleteForever(){
    console.log(this.deletedCard);
    console.log("In delete forever notes function");
    const note = {
      'noteIdList': [this.deletedCard['id']],
      'isDeleted': true

    }
    console.log(note);
    this.userService.deleteForeverNotes(note).subscribe(data => {

      console.log("Response to delete forever notes", data);
      this.messageEvent.emit();
      this.snackBar.open('Note Deleted Permanently', 'Undo', {
        duration: 3000,
      })

    }, error => {
      console.log("error in deleting the notes permanently", error);
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
  changeColor(code, cards) {
    console.log("In change color");
    console.log(cards);
    const note = {
      'noteIdList': [this.cards['id']],
      'color': code
    }
    console.log(note);
    this.userService.changeColor(note).subscribe(response => {
      console.log("Response to change color", response);
      this.messageEvent.emit();
    }, error => {
      console.log("Error in changing color", error);
    })
  }
  remindMeToday() {
    console.log("In remind me today function");
    let date = new Date();
    console.log('Date is', date);
    this.date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 20, 0, 0, 0);
    console.log("Date Example is", this.date1);

    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.date1]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.messageEvent.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
  }
  remindMeTomorrow() {
    console.log("In remind me tomorrow function");
    let date = new Date();
    console.log('Date is', date);
    this.date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 8, 0, 0, 0)
    console.log("Date Example is", this.date2);
    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.date2]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.messageEvent.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
  }
remindNextWeek(){
console.log("In remind next week function");
let date = new Date();
    console.log('Date is', date);
    this.date3 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7, 8, 0, 0, 0)
    console.log("Date Example is", this.date2);
    const object = {
      'noteIdList': [this.cards['id']],
      'reminder': [this.date3]
    }
    this.userService.addReminder(object).subscribe(response => {
      console.log("Response to add reminder", response);
      this.messageEvent.emit();
    }, error => {
      console.log("Error in adding reminder", error);
    })
}
saveReminder(date,time){
  console.log("In save reminder function");
  console.log(date);
  console.log(time);
  if (time== '8:00 AM') {
    const body = {
      "noteIdList": [this.cards.id],
      "reminder": new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0)
}
this.userService.addReminder(body).subscribe(response => {
  console.log("Response to add reminder", response);
  this.messageEvent.emit();
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
this.messageEvent.emit();
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
this.messageEvent.emit();
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
this.messageEvent.emit();
}, error => {
console.log("Error in adding reminder", error);
})
}
else if (time == this.reminderBody.time) {
  var splitTime = this.reminderBody.time.split("", 8);
  console.log(splitTime);
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
  this.messageEvent.emit();
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
  this.messageEvent.emit();
  }, error => {
  console.log("Error in adding reminder", error);
  })
  }

}
}
}
