import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { DialogData} from '../icon/icon.component';
import { environment } from '../../../environments/environment';
import {UserServiceService} from '../../services/userService/user-service.service'
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  public firstName: string;
  public lastName;
  public email: string;
  public show:boolean;
  public searchValue:string;
  public searchArray=[];
  constructor(public dialogRef: MatDialogRef<IconComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,public userService:UserServiceService) { }

  ngOnInit() {
  console.log("data in collaborator component",this.data);
  this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
  }
  public image2 = localStorage.getItem('imageUrl');
  public img = environment.apiUrl + this.image2;
  
  searchUsers() {
    const word={
      searchWord : this.searchValue
    }
    this.userService.searchUser(word).subscribe(response => {
        this.searchArray = response['data']['details'];
       console.log("Response to search users",response)
      }, error => {
        console.log("Error in searching users",error);
      })
}
select(email){
  this.searchValue=email;
  console.log(this.searchValue);
}
 
}
