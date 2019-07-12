import { Component, OnInit,Inject,EventEmitter,Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material';
import { IconComponent } from '../icon/icon.component';
import { DataService} from '../../services/data.service';
import { environment } from '../../../environments/environment';
import {UserServiceService} from '../../services/userService/user-service.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface CollaboratorData{
  email:string;
  firstName:string;
  lastName:string;
  userId:string;
}

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Output() addCollaboratorEvent=new EventEmitter<any>()
  public firstName: string;
  public lastName;
  public email: string;
  public show:boolean;
  public searchValue:string;
  public searchArray=[];
  private collaborator=[];
  private collabId:string;
  public cards=[];
  constructor(public dialogRef: MatDialogRef<IconComponent>,@Inject(MAT_DIALOG_DATA) public data,public userService:UserServiceService,public dataService:DataService,private snackBar: MatSnackBar,public dialog:MatDialog) { }

  ngOnInit() {
  console.log("data in collaborator component",this.data);
  this.firstName = localStorage.getItem('firstname');
    this.lastName = localStorage.getItem('lastname');
    this.email = localStorage.getItem('email');
    for (let i = 0; i < this.data['collaborators'].length; i++) {
      this.collaborator.push(this.data['collaborators'][i]);
     
}
  }
  public image2 = localStorage.getItem('imageUrl');
  public img = environment.apiUrl + this.image2;
  
  onNoClick(){
    this.dialogRef.close();
    
  }
  
  
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
 addCollaborator(userDetails){
   console.log("user is",userDetails);
   const collaboratorDetails={
     firstName:userDetails.firstName,
     lastName:userDetails.lastName,
     email:userDetails.email,
     userId:userDetails.userId,
   }
 console.log("Collaborator details",collaboratorDetails);
 this.userService.addCollaborator(this.data.id,collaboratorDetails).subscribe(response=>{
   console.log("Response in adding collaborator",response)
   
 },error=>{
   console.log("Error in adding collaborator",error);
 })
  }
addCollab(userEmail){
  console.log("User email is",userEmail)
  

    for (let k = 0; k < this.collaborator.length; k++) {
      if (this.searchValue == this.collaborator[k].email) {
        this.snackBar.open('Collaborator already exists','Undo' , {
          duration: 2000
        })
        this.searchValue = null;
        return false;
      }
    }
    for (let i = 0; i < this.searchArray.length; i++) {
      if (this.searchArray[i].email == userEmail) {
        this.collaborator.push(this.searchArray[i]);
        
      }
}
    
}
removeCollaborator(collaborator){
 this.userService.removeCollaborator(this.data.id,collaborator.userId).subscribe(response=>{
   console.log("Response to remove collaborator",response)
   for (let i = 0; i < this.collaborator.length; i++) {
    if (collaborator.email == this.collaborator[i].email) {
      this.collaborator.splice(i, 1);
    }
}
 },error=>{
   console.log("Error in remove collaborator",error);
 })

}
saveCollaborator(userEmail){
  for (let k = 0; k < this.collaborator.length; k++) {
    if (this.searchValue == this.collaborator[k].email) {
      this.snackBar.open('Collaborator already exists','Undo' , {
        duration: 2000
      })
      this.searchValue = null;
      return false;
    }
  }
  for (let i = 0; i < this.searchArray.length; i++) {
    if (this.searchArray[i].email == userEmail) {
      this.collaborator.push(this.searchArray[i]);
    }
    
  }
  this.dialogRef.close();
  this.dataService.sendData(this.data)
}

onCancel(){
  this.dialogRef.close();
}
}

