import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditlabelsComponent } from '../../editlabels/editlabels.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,) { }

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
openEditLabels(){
  console.log('in edit labels');
  this.dialog.open(EditlabelsComponent);
}
}
