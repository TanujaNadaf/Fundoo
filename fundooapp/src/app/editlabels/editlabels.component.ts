import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserServiceService} from '../services/userService/user-service.service';
//import{LabelModel} from '../models/labelModel';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {
label=new FormControl();

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  }
createLabel(){
  console.log("In create label")
  //const labelModel=new LabelModel();
  //labelModel.label=this.label.value;
  //console.log(labelModel);
  const labelObject={
   'label':this.label.value,
   'isDeleted':false,
   
}
console.log(labelObject);
  this.userService.createLabel(labelObject).subscribe(response=>{
    console.log("Response to create label",response);
  },error=>{
    console.log("Error in creating labels",error);
  })
}
}
