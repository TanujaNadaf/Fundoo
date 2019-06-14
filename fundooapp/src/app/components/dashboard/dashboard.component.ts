import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditlabelsComponent } from '../../editlabels/editlabels.component'
import {UserServiceService} from '../../services/userService/user-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() text:string;
  allLabels=[];
  details;
  cards;
constructor(private router:Router,public dialog: MatDialog,private userService:UserServiceService) { }

  ngOnInit() {
    this.getAllLabels();
  }
openNotes(){
  console.log('in openNotes');
  
  this.router.navigate(['dashboard/notes']);
}
openReminders(){
  console.log('in openReminders');
  this.router.navigate(['dashboard/reminders']);
}
openArchive(){
  console.log('in Archive');
  this.router.navigate(['dashboard/archive']);
}
openTrash(){
  console.log('in Trash');
  this.router.navigate(['dashboard/trash']);
}
openEditLabels(){
  console.log('in edit labels');
  
  this.dialog.open(EditlabelsComponent)
}
getAllLabels(){
  this.userService.getAllLabels().subscribe(response => {
    console.log('Response to get all labels',response);
   
    console.log(response['data']['details']);
    this.allLabels=response['data']['details'];
    console.log(this.allLabels);
    
  }, error => {
    console.log("Error in Displaying Notes", error);
  })
}
recieveMessageEvent($event){
  this.getAllLabels();
}
}
