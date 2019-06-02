import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
}
