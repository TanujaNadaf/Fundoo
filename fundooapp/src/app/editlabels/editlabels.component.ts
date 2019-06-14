import { Component, OnInit,EventEmitter,Output } from '@angular/core';
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
  @Output() messageEvent =new EventEmitter<any>()
  label=new FormControl();
  public icon = 'add'; 
labelId;
show=true;
labels=[];
hide = false;
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
     this.messageEvent.emit();
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
changeIcon(id){
this.labelId=id;
}
onNoClick():
    void {
    this.dialogRef.close();
  }
updateLabel(labelDetails){
  console.log("In update label");
  console.log(labelDetails);
  this.userService.updateLabel(labelDetails.id,labelDetails).subscribe(response => {

    console.log("Response to update label", response);
   // this.messageEvent.emit();
    }, error => {
    console.log("error in updating label", error);
  })
}

}

