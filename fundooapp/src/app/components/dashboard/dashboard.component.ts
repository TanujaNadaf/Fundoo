import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditlabelsComponent } from '../../editlabels/editlabels.component'
import {UserServiceService} from '../../services/userService/user-service.service'
import { DataService } from "../../services/data.service";
import {environment} from '../../../environments/environment';
import  {CropimageComponent} from "../cropimage/cropimage.component";
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
  firstname;
  lastname;
  email;


   private list = 0;
   private image;
   path=[];
   selectedFile = null;
constructor(private router:Router,public dialog: MatDialog,private userService:UserServiceService,public data: DataService,) { }

  ngOnInit() {
    this.data.currentData.subscribe(labels => {
      this.getAllLabels();

    });
    this.firstname = localStorage.getItem('firstname');
    this.lastname = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
    

  }
  public pic;
  public image2 = localStorage.getItem('imageUrl');
img = environment.apiUrl + this.image2;
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
onFileUpload(event) {
  console.log(event);
  //var token = localStorage.getItem('token');
   this.profileCropOpen(event);
   
  
}
profileCropOpen(data): void { 
  const dialogRefPic = this.dialog.open(CropimageComponent, {
    width: '600px',
    data: data
});
dialogRefPic.afterClosed().subscribe(result => {
  this.data.currentData.subscribe(message => this.pic = message)
  if (this.pic == true) {
    this.image2 = localStorage.getItem('imageUrl');
    console.log("Image 2 after closing dialog is",this.image2)
    this.img = environment.apiUrl + this.image2;
    console.log("Image after closing dialog is",this.img);
  }

});
}


}


