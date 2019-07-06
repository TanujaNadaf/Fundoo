import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

result;
reminderArray=[];
@Output() messageEvent = new EventEmitter<any>()

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getAllReminders();
  }
 

  getAllReminders() {
    console.log("In get all reminders function");
    
    this.userService.getAllReminders().subscribe(response => {

      console.log("Response to get all reminders", response);
      
      this.result= response['data']['data']
      console.log("Result is",this.result);
      this.reminderArray = this.result;
      console.log("Reminder Array",this.reminderArray);
      
      
    }, error => {
      console.log("error in getting all reminders", error);
    })
  }

}