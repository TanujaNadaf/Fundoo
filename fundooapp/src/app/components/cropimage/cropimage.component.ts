import { Component, OnInit,Inject } from '@angular/core';
import { DataService } from "../../services/data.service";
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {UserServiceService} from '../../services/userService/user-service.service'
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-cropimage',
  templateUrl: './cropimage.component.html',
  styleUrls: ['./cropimage.component.scss']
})
export class CropimageComponent implements OnInit {
public croppedImage:any;
public imageChangedEvent:any;



public image2 = localStorage.getItem('imageUrl');
public img = environment.apiUrl + this.image2;  

constructor(@Inject(MAT_DIALOG_DATA) public data:any,private userService:UserServiceService,public dialogRefPic: MatDialogRef<DashboardComponent>,private dataService:DataService) { }

  ngOnInit() {
  
  }
imageCropped($event){
  console.log("event in image cropper",$event)
this.croppedImage=$event.file
  
}

onUpload(){
  const uploadData=new FormData();
  uploadData.append('file',this.croppedImage);
  
 
  this.userService.addImage(uploadData).subscribe(response=>{
    console.log("Response to add image",response);
    this.img=response['status']['imageUrl'];
    //this.img = environment.apiUrl + response['status'].imageUrl;
    //console.log("image is",this.img)
    localStorage.setItem("imageUrl", response['status'].imageUrl);
    this.dialogRefPic.close()
    this.dataService.sendData(true);

    
  },error=>{
    console.log("Error in adding image",error);
  })

}
}
