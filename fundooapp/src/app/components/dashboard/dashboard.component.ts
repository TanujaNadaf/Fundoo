import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditlabelsComponent } from '../../editlabels/editlabels.component'
import { UserServiceService } from '../../services/userService/user-service.service'
import { DataService } from "../../services/data.service";
import { environment } from '../../../environments/environment';
import { CropimageComponent } from "../cropimage/cropimage.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() text: string;
  public allLabels = [];
  public details: string;
  
  public firstName: string;
  public lastName;
  public email: string;


  private list = 0;
  private image;
  
  public selectedFile = null;
  constructor(private router: Router, public dialog: MatDialog, private userService: UserServiceService, public data: DataService, ) { }

  ngOnInit() {
    this.data.currentData.subscribe(labels => {
      this.getAllLabels();

    });
    this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');


  }
  public pic;
  public image2 = localStorage.getItem('imageUrl');
  public img = environment.apiUrl + this.image2;
  openNotes() {


    this.router.navigate(['dashboard/notes']);
  }
  openReminders() {

    this.router.navigate(['dashboard/reminders']);
  }
  openArchive() {

    this.router.navigate(['dashboard/archive']);
  }
  openTrash() {

    this.router.navigate(['dashboard/trash']);
  }
  openEditLabels() {


    this.dialog.open(EditlabelsComponent)
  }
  getAllLabels() {
    this.userService.getAllLabels().subscribe(response => {
      console.log('Response to get all labels', response);


      this.allLabels = response['data']['details'];
      ;

    }, error => {
      console.log("Error in Displaying Notes", error);
    })
  }
  recieveMessageEvent($event) {
    this.getAllLabels();
  }
  onFileUpload(event) {


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

        this.img = environment.apiUrl + this.image2;

      }

    });
  }
  logout(){
    this.userService.logout({}).subscribe(response => {
      console.log("Response to logout",response)
        
        this.router.navigate(['/login']);
    },error=>{
      console.log("error in logout",error)
    });
  }
  
  gridView() {
    this.data.changeGridEvent(true);
    this.list = 1;
  }
  listView(){
    this.data.changeListEvent(false);
    this.list = 0;
  }
  routeToPayment(){
    this.router.navigate(['dashboard/payment']);
  }
}


