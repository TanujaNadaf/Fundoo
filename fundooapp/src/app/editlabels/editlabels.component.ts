import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserServiceService} from '../services/userService/user-service.service';
//import{LabelModel} from '../models/labelModel';

import { FormControl } from '@angular/forms';
import{DeletelabelComponent} from '../components/deletelabel/deletelabel.component';
@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit{
 
  label=new FormControl();
  public icon = 'add'; 

show=true;
labels=[];

  constructor(private userService:UserServiceService,public dialogRef: MatDialogRef<EditlabelsComponent>) { }

  ngOnInit() {
    
    this.getAllLabels();
  }
  
createLabel(){
  console.log("In create label")
  //const labelModel=new LabelModel();
  //labelModel.label=this.label.value;
  //console.log(labelModel);
  const labelObject={
   'label':this.label.value,
   'isDeleted':false,
    'userId': '5ce8cedf2571b100409f65a8'
  
}
console.log(labelObject);
  this.userService.createLabel(labelObject).subscribe(response=>{
    console.log("Response to create label",response);
   
  },error=>{
    console.log("Error in creating labels",error);
  })
}
getAllLabels(){
  this.userService.getAllLabels().subscribe(response => {
    console.log('Response to get all labels',response);
   
    console.log(response['data']['details']);
    this.labels=response['data']['details'];
    console.log(this.labels);
    
  }, error => {
    console.log("Error in Displaying Notes", error);
  })
}
public toggleIcon() {
  if (this.icon === 'add') {
      this.icon = 'clear';
      this.show=false;
  } else {
      this.icon = 'add'
      this.show=true;
  }
 
}

onNoClick():
    void {
    this.dialogRef.close();
  }


}

